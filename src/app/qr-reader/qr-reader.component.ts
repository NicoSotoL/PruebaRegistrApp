import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxQrReaderComponent } from 'ngx-qr';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss'],
})
export class QrReaderComponent {
  @ViewChild(NgxQrReaderComponent) qrReader: NgxQrReaderComponent;
  qrResult: string = '';

  onQRCodeRead(event: any) {
    this.qrResult = event;
  }
}
