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
    const qrImage = document.createElement('div');
    qrImage.innerHTML = `
      <div class="qr-overlay">
        <ion-img src="assets/icon/qr.png" class="responsive-image" class="qr-image">
        <button (click)="cerrarQR()" class="close-button">Cerrar</button>
      </div>
    `;
    this.renderer.appendChild(this.el.nativeElement, qrImage);
    this.renderer.addClass(document.body, 'no-scroll');
  }

  cerrarQR() {
    const qrOverlay = document.querySelector('.qr-overlay');
    if (qrOverlay) {
      qrOverlay.remove();
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
