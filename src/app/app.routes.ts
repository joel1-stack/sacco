import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./components/login/login').then(m => m.Login)
  },
  { 
    path: 'register', 
    loadComponent: () => import('./components/register/register').then(m => m.Register)
  },
  { 
    path: 'forgot-password', 
    loadComponent: () => import('./components/forgot-password/forgot-password').then(m => m.ForgotPassword)
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
  },
  { 
    path: 'accounts', 
    loadComponent: () => import('./components/accounts/account-list/account-list').then(m => m.AccountList),
    canActivate: [authGuard]
  },
  { 
    path: 'loans', 
    loadComponent: () => import('./components/loans/loan-list/loan-list').then(m => m.LoanList),
    canActivate: [authGuard]
  },
  { 
    path: 'transactions', 
    loadComponent: () => import('./components/transactions/transaction-list/transaction-list').then(m => m.TransactionList),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/dashboard' }
];
