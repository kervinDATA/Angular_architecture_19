import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../models/user.model';
import { AccountUserDisplayComponent } from '../ui/account-user-display.component';

@Component({
  selector: 'app-account-user',
  standalone: true,
  imports: [CommonModule, AccountUserDisplayComponent],
  templateUrl: './account-user.component.html',
})
export class AccountUserComponent implements OnInit {
  user: User | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      if (userId) {
        this.userService.getUsers().subscribe(users => {
          this.user = users.find(user => user.id === +userId) || null;
        });
      }
    });
  }
}
