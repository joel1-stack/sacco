import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Header } from '../../layout/header/header';
import { Auth } from '../../../services/auth';
import { Loan } from '../../../services/loan';

@Component({
  selector: 'app-loan-list',
  imports: [CommonModule, Header],
  templateUrl: './loan-list.html',
  styleUrl: './loan-list.css'
})
export class LoanList implements OnInit {
  loans: any[] = [];
  loading = true;

  constructor(
    private auth: Auth,
    private router: Router,
    private loanService: Loan
  ) {}

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getLoans().subscribe({
      next: (data) => {
        this.loans = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading loans:', err);
        this.loading = false;
      }
    });
  }
}
