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
  qrCodeString: string = "";
  asignaturas: any[] = [
    { nombre: 'Asignatura 1', seccion: 'Seccion A' },
    { nombre: 'Asignatura 2', seccion: 'Seccion B' },
    { nombre: 'Asignatura 3', seccion: 'Seccion C' },
    { nombre: 'Asignatura 4', seccion: 'Seccion D' },
    { nombre: 'Asignatura 5', seccion: 'Seccion E' }
  ];

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

  mostrarQR(asignatura: string, seccion: string) {
    this.qrCodeString = `Asignatura: ${asignatura}, Sección: ${seccion}`;
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
