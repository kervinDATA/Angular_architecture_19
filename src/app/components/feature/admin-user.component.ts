import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../models/user.model';
import { AdminUserDisplayComponent } from '../ui/admin-user-display.component';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule, AdminUserDisplayComponent],
  templateUrl: './admin-user.component.html',
})
export class AdminUserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}

