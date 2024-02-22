import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { TransactionType } from '../components/transactions/transactions.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private pocketbase: PocketBase;

  constructor() {
    this.pocketbase = new PocketBase('http://127.0.0.1:8090')
  }

  public async getTransactions(): Promise<TransactionType[]> {
    //await this.pocketbase.admins.authWithPassword('mbogokennedy08@gmail.com', 'kinuthiapro2');
    const transactionRecords = await this.pocketbase.collection('transaction')
      .getFullList({
        sort: '-created',
        expand: 'from,to'
      });


    return transactionRecords.map((transaction) => {
      return {
        from: transaction?.expand?.['from'].name,
        fromDescription: transaction?.expand?.['from'].description,
        to: transaction?.expand?.['to'].name,
        toDescription: transaction?.expand?.['to'].description,
        amount: (transaction as any).amount,
      };
    });
  }
}
