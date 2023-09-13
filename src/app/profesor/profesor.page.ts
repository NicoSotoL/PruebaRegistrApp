import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {
  userHome = "";
  userName = "";
  mostrarImagenQR = false; // Agregamos una variable para controlar la visibilidad de la imagen QR

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
}
