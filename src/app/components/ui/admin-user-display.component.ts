import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin-user-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user-display.component.html',
})
export class AdminUserDisplayComponent {
  @Input() users: User[] = []; // Propriété qui doit exister
}

