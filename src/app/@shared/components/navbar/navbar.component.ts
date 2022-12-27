import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private AuthService: AuthService) {}
  ngOnInit(): void {}
  logout() {
    this.AuthService.logout();
  }
}
