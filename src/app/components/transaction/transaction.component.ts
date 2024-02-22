import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit {
  @Input()
  public from: string = '';
  @Input()
  public fromDescription: string = '';
  @Input()
  public to: string = '';
  @Input()
  public toDescription: string = '';
  @Input()
  public amount: number = 0;

  constructor() { }

  ngOnInit(): void { }
}
