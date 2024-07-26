import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountUserComponent } from '../../components/feature/account-user.component';

@Component({
  selector: 'app-account-home',
  standalone: true,
  imports: [CommonModule, AccountUserComponent],
  templateUrl: './account-home.component.html',
})
export class AccountHomeComponent {}
