import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./components/landing/landing').then(m => m.Landing)
  },
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
    path: 'loans/apply', 
    loadComponent: () => import('./components/loans/loan-application/loan-application').then(m => m.LoanApplication),
    canActivate: [authGuard]
  },
  { 
    path: 'transactions', 
    loadComponent: () => import('./components/transactions/transaction-list/transaction-list').then(m => m.TransactionList),
    canActivate: [authGuard]
  },
  { 
    path: 'profile', 
    loadComponent: () => import('./components/members/member-profile/member-profile').then(m => m.MemberProfile),
    canActivate: [authGuard]
  },
  { 
    path: 'transactions/deposit', 
    loadComponent: () => import('./components/transactions/deposit/deposit').then(m => m.Deposit),
    canActivate: [authGuard]
  },
  { 
    path: 'transactions/withdraw', 
    loadComponent: () => import('./components/transactions/withdraw/withdraw').then(m => m.Withdraw),
    canActivate: [authGuard]
  },
  { 
    path: 'transactions/transfer', 
    loadComponent: () => import('./components/transactions/transfer/transfer').then(m => m.Transfer),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/dashboard' }
];
