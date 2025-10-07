import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Loan } from '../../../services/loan';

@Component({
  selector: 'app-loan-application',
  imports: [CommonModule, ReactiveFormsModule, Header],
  templateUrl: './loan-application.html',
  styleUrl: './loan-application.css'
})
export class LoanApplication {
  loanForm: FormGroup;
  loading = false;
  error = '';
  success = false;

  loanTypes = [
    { value: 'personal', label: 'Personal Loan' },
    { value: 'emergency', label: 'Emergency Loan' },
    { value: 'business', label: 'Business Loan' },
    { value: 'education', label: 'Education Loan' }
  ];

  constructor(
    private fb: FormBuilder,
    private loanService: Loan,
    private router: Router
  ) {
    this.loanForm = this.fb.group({
      loan_type: ['', [Validators.required]],
      amount_requested: ['', [Validators.required, Validators.min(1000)]],
      interest_rate: [12, [Validators.required, Validators.min(1)]],
      term_months: ['', [Validators.required, Validators.min(1)]],
      purpose: ['', [Validators.required, Validators.minLength(10)]],
      collateral: ['']
    });
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      this.loading = true;
      this.error = '';
      
      this.loanService.applyForLoan(this.loanForm.value).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
          setTimeout(() => this.router.navigate(['/loans']), 2000);
        },
        error: (err) => {
          this.error = err.error?.message || 'Loan application failed';
          this.loading = false;
        }
      });
    }
  }
}
