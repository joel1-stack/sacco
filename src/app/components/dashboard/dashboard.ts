import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Header } from '../layout/header/header';
import { Auth } from '../../services/auth';
import { Api } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, Header],
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

  constructor(private auth: Auth, private router: Router, private api: Api) {}

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
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
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }

    this.api.get('/dashboard/').subscribe({
      next: (data: any) => {
        this.financialSummary = {
          totalSavings: parseFloat(data.accounts_summary?.total_balance || '0'),
          totalShares: 0,
          activeLoans: data.loans_summary?.total_balance || 0,
          availableCredit: 0
        };
        this.recentTransactions = data.recent_transactions || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Dashboard data error:', err);
        this.loading = false;
      }
    });
  }
}
