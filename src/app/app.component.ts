import { Component, OnInit } from '@angular/core';
import { IAccount } from './account';
import { AccountService } from './Account.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggingService]
})
export class AppComponent implements OnInit{
  message="Hi Arad";
  accounts:IAccount[]=[];
  constructor(private logging: LoggingService,
             private accountService:AccountService){

  }
  ngOnInit(): void {
   this.logging.loggingMessage(this.message);
   this.accounts=this.accountService.account;
  }

  
}
