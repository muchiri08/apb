import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';
import { TransactionsService } from '../../services/transactions.service';

export interface TransactionType {
  from: string;
  fromDescription: string;
  to: string;
  toDescription: string;
  amount: number;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor, TransactionComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  public transactions: TransactionType[] = [];

  constructor(private readonly transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionsService.getTransactions().then(t => {
      this.transactions = t;
    });
  }

}
