import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../layout/header/header';

@Component({
  selector: 'app-account-list',
  imports: [CommonModule, Header],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList {
  accounts = [
    { id: 1, type: 'Savings', balance: 25000, accountNumber: 'SAV001' },
    { id: 2, type: 'Shares', balance: 15000, accountNumber: 'SHR001' }
  ];
}
