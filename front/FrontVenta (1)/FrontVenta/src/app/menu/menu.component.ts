import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private http: HttpClient, private router: Router) { }

  buttonClicked(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.router.navigateByUrl('/ventas');
        break;
      case 2:
        this.router.navigateByUrl('/categorias');
        break;
      case 3:
        this.router.navigateByUrl('/productos');
        break;
      case 4:
        this.router.navigateByUrl('/cliente');
        break;

      case 5:
        this.router.navigateByUrl('/personas');
        break;
      case 7:
        this.router.navigateByUrl('/devoluciones');
        break;
      case 8:
          this.router.navigateByUrl('/proveedores');
          break;
      case 9:
          this.router.navigateByUrl('/almacen');
          break;
      case 10:
            this.router.navigateByUrl('/personas');
           break;
      case 11:
          this.router.navigateByUrl('/detalleventa');
          break;
          case 12:
          this.router.navigateByUrl('/tipocliente');
          break;
          case 13:
          this.router.navigateByUrl('/tipoempleado');
          break;
          case 14:
          this.router.navigateByUrl('/empleado');
          break;
      default:
        console.log('Botón no reconocido');
        break;
    }
  }
}

