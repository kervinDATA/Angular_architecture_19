import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from '../../components/feature/admin-user.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, AdminUserComponent],
  templateUrl: './admin-home.component.html',
})
export class AdminHomeComponent {}


