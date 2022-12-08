import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAccount } from '../account';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild('userName') name:ElementRef | undefined;
  @ViewChild('password') password:ElementRef | undefined;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  addNewAccount(){
    let a:IAccount={name:this.name?.nativeElement.value,password:this.password?.nativeElement.value};
    this.accountService.addAccount(a);

  }

}
