import { Component, OnInit } from '@angular/core';
import { Usuario } from 'usuario.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario();
  isPasswordValid: boolean = false;
  validEmailPattern: string = '^(benito@duoc.cl|tego@profeduoc.cl)$';

  constructor(private router: Router) {}

  validateUser(user: Usuario): boolean {
    if (
      (user.email === 'benito@duoc.cl' && user.password === 'Benito321') ||
      (user.email === 'tego@profeduoc.cl' && user.password === 'Calderon321')
    ) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword() {
    if (this.user.email === 'benito@duoc.cl' && this.user.password === 'Benito321') {
      this.isPasswordValid = true;
    } else if (this.user.email === 'tego@profeduoc.cl' && this.user.password === 'Calderon321') {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }
  getUserName(email: string): string {
    if (email === 'benito@duoc.cl') {
      return 'Bad Bunny';
    } else if (email === 'tego@profeduoc.cl') {
      return 'Tego Calderón';
    }
    return '';
  }
  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    if (this.validateUser(this.user)) {
      console.log('Inicio de sesión exitoso');

      let NavigationExtras: NavigationExtras = {
      state: {user: this.user.email, telefono: "11111111", name: this.getUserName(this.user.email)}

      };

      if (this.user.email === 'benito@duoc.cl') {
        this.router.navigate(['/alumno'],NavigationExtras);
      }
      else if (this.user.email === 'tego@profeduoc.cl') {
        this.router.navigate(['/profesor'],NavigationExtras);
      } else {
        this.router.navigate(['/scanner']);
      }
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
