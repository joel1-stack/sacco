import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Member } from '../../../services/member';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-member-profile',
  imports: [CommonModule, ReactiveFormsModule, Header],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile implements OnInit {
  profileForm: FormGroup;
  loading = false;
  error = '';
  success = '';
  profileImage = '';
  selectedFile: File | null = null;
  currentUser: any = null;

  constructor(
    private fb: FormBuilder,
    private memberService: Member,
    private auth: Auth
  ) {
    this.profileForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required]],
      address: [''],
      occupation: [''],
      employer: ['']
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.currentUser = this.auth.getCurrentUser();
    if (this.currentUser) {
      this.profileForm.patchValue({
        first_name: this.currentUser.first_name,
        last_name: this.currentUser.last_name,
        email: this.currentUser.email,
        phone_number: this.currentUser.phone_number,
        address: this.currentUser.address,
        occupation: this.currentUser.occupation,
        employer: this.currentUser.employer
      });
      this.profileImage = this.currentUser.profile_image || 'https://via.placeholder.com/150x150/1E3A8A/FFFFFF?text=User';
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.loading = true;
      this.error = '';
      
      const formData = new FormData();
      Object.keys(this.profileForm.value).forEach(key => {
        formData.append(key, this.profileForm.value[key]);
      });
      
      if (this.selectedFile) {
        formData.append('profile_image', this.selectedFile);
      }
      
      this.memberService.updateProfile(formData).subscribe({
        next: (response) => {
          this.success = 'Profile updated successfully!';
          this.loading = false;
          setTimeout(() => this.success = '', 3000);
        },
        error: (err) => {
          this.error = err.error?.message || 'Failed to update profile';
          this.loading = false;
        }
      });
    }
  }
}
