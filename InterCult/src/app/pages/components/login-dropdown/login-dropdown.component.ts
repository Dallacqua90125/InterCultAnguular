import { Component } from '@angular/core';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.css']
})
export class LoginDropdownComponent {
  perfil: string = 'assets/icone.png';
  isOpen = false;
  currentUser: string = 'Login'

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUserName') || ''; 
  }
}
