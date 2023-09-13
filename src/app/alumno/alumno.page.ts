import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  userHome = "";
  userName = "";
  mostrarImagenQR = false;
  
  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
      }
    });
  }

  ngOnInit() {
  }

  mostrarQR() {
    this.mostrarImagenQR = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  cerrarQR() {
    this.mostrarImagenQR = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }
cerrarSesion() {
  this.router.navigate(['/home']);
}
}