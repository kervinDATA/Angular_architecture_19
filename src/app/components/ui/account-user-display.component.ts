import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-account-user-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-user-display.component.html',
})
export class AccountUserDisplayComponent {
  @Input() user!: User;
}

