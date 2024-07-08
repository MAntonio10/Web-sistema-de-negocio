import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor() { }

  imprimirElemento(elementId: string): void {
    const printContents = document.getElementById(elementId)?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      const printStyle = this.createPrintStyle();
      document.head.appendChild(printStyle);

      document.body.innerHTML = printContents;
      window.print();

      document.body.innerHTML = originalContents;
      document.head.removeChild(printStyle);
      window.location.reload();  // Recargar para restaurar el contenido original
    } else {
      console.error(`Elemento con id ${elementId} no encontrado.`);
    }
  }

  private createPrintStyle(): HTMLStyleElement {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.media = 'print';
    style.innerHTML = `
      @page { margin: 20mm; }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
      }
    `;
    return style;
  }
}
