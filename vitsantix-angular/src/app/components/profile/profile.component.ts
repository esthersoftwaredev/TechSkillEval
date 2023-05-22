import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private userService: UserService) {}

  logout(): void {
    this.userService.logout();
    // Perform any additional actions after logout if needed
  }
}
