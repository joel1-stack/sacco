import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';
import { Transaction } from '../../../services/transaction';
import { Account } from '../../../services/account';

@Component({
  selector: 'app-deposit',
  imports: [CommonModule, ReactiveFormsModule, Header],
  templateUrl: './deposit.html',
  styleUrl: './deposit.css'
})
export class Deposit implements OnInit {
  depositForm: FormGroup;
  loading = false;
  error = '';
  success = false;
  accounts: any[] = [];

  constructor(
    private fb: FormBuilder,
    private transactionService: Transaction,
    private accountService: Account
  ) {
    this.depositForm = this.fb.group({
      account_id: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe({
      next: (accounts) => {
        this.accounts = accounts;
      },
      error: (err) => console.error('Error loading accounts:', err)
    });
  }

  onSubmit(): void {
    if (this.depositForm.valid) {
      this.loading = true;
      this.error = '';
      
      this.transactionService.deposit(this.depositForm.value).subscribe({
        next: () => {
          this.success = true;
          this.loading = false;
        },
        error: (err) => {
          this.error = err.error?.message || 'Deposit failed';
          this.loading = false;
        }
      });
    }
  }
}
