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
  validEmailPattern: string = '^(yoelmonkey@duocuc.cl|kike@profeduoc.cl)$';

  constructor(private router: Router) {}

  validateUser(user: Usuario): boolean {
    if (
      (user.email === 'yoelmonkey@duocuc.cl' && user.password === 'monkey123_') ||
      (user.email === 'kike@profeduoc.cl' && user.password === 'kike123_')
    ) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword() {
    if (this.user.email === 'yoelmonkey@duocuc.cl' && this.user.password === 'monkey123_') {
      this.isPasswordValid = true;
    } else if (this.user.email === 'kike@profeduoc.cl' && this.user.password === 'kike123_') {
      this.isPasswordValid = true;
    } else {
      this.isPasswordValid = false;
    }
  }
  getUserName(email: string): string {
    if (email === 'yoelmonkey@duocuc.cl') {
      return 'Macacinho';
    } else if (email === 'kike@profeduoc.cl') {
      return 'Kike  Morande';
    }
    return '';
  }
  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    if (this.validateUser(this.user)) {
      console.log('Inicio de sesión exitoso');

      let NavigationExtras: NavigationExtras = {
      state: {user: this.user.email, telefono: "69696969", name: this.getUserName(this.user.email)}

      };

      if (this.user.email === 'yoelmonkey@duocuc.cl') {
        this.router.navigate(['/alumno'],NavigationExtras);
      }
      else if (this.user.email === 'kike@profeduoc.cl') {
        this.router.navigate(['/profesor'],NavigationExtras);
      } else {
        this.router.navigate(['/scanner']);
      }
    } else {
      console.log('Credenciales incorrectas');
    }
 }
}
