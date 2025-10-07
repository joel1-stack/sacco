import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Header } from '../../layout/header/header';
import { Account } from '../../../services/account';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-account-list',
  imports: [CommonModule, Header],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList implements OnInit {
  accounts: any[] = [];
  loading = true;

  constructor(
    private accountService: Account,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      return;
    }
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe({
      next: (data) => {
        this.accounts = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading accounts:', err);
        this.loading = false;
      }
    });
  }
}
