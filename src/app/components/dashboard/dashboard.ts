import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';
import { AnimatedBackground } from '../shared/animated-background/animated-background';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, Header, Footer, AnimatedBackground],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  financialSummary = {
    totalSavings: 0,
    totalShares: 0,
    activeLoans: 0,
    availableCredit: 0
  };

  recentTransactions: any[] = [];
  loading = true;

  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  requireAuth(route: string): void {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadDashboardData(): void {
    setTimeout(() => {
      if (this.auth.isAuthenticated()) {
        this.financialSummary = {
          totalSavings: 25000,
          totalShares: 15000,
          activeLoans: 50000,
          availableCredit: 75000
        };
        
        this.recentTransactions = [
          { id: 1, type: 'Deposit', amount: 5000, date: new Date(), description: 'Salary deposit' },
          { id: 2, type: 'Withdrawal', amount: -2000, date: new Date(), description: 'ATM withdrawal' },
          { id: 3, type: 'Loan Payment', amount: -3000, date: new Date(), description: 'Monthly loan payment' }
        ];
      } else {
        this.financialSummary = {
          totalSavings: 0,
          totalShares: 0,
          activeLoans: 0,
          availableCredit: 0
        };
        
        this.recentTransactions = [];
      }
      
      this.loading = false;
    }, 1000);
  }
}
