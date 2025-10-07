import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  registerForm: FormGroup;
  loading = false;
  error = '';
  success = false;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value 
      ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      this.error = '';
      
      const formData = this.registerForm.value;
      
      // Map frontend fields to backend expected fields
      const userData = {
        username: formData.username,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
        password: formData.password,
        password_confirm: formData.confirmPassword
      };
      
      this.auth.register(userData).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (err) => {
          console.error('Registration error:', err);
          
          if (err.status === 400 && err.error) {
            // Handle field-specific errors
            const errors = err.error;
            let errorMessage = '';
            
            if (errors.username) {
              errorMessage += `Username: ${errors.username[0]}. `;
            }
            if (errors.email) {
              errorMessage += `Email: ${errors.email[0]}. `;
            }
            if (errors.phone_number) {
              errorMessage += `Phone: ${errors.phone_number[0]}. `;
            }
            if (errors.password) {
              errorMessage += `Password: ${errors.password[0]}. `;
            }
            if (errors.password_confirm) {
              errorMessage += `Passwords don't match. `;
            }
            if (errors.non_field_errors) {
              errorMessage += errors.non_field_errors[0];
            }
            
            this.error = errorMessage || 'Registration failed. Please check your information.';
          } else {
            this.error = err.error?.message || 'Registration failed';
          }
          
          this.loading = false;
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }
}
