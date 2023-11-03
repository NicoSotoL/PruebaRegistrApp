import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BarcodeScannerOptions,BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  userHome = "";
  userName = "";
  datoscaneado = {};
  
  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef,
    private barcodeScanner: BarcodeScanner) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.userHome = this.router.getCurrentNavigation()?.extras.state?.['user'];
        this.userName = this.router.getCurrentNavigation()?.extras.state?.['name'];
      }
    });
  }

  ngOnInit() {
  }

  leerCode() {
    this.barcodeScanner.scan().then(this.barcodeData = > {
      this.datoscaneado = barcodeData;
    })
    .catch(err =>{
      console.log("Error"),err
    })
  }

cerrarSesion() {
  this.router.navigate(['/home']);
}
}