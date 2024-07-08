export interface Devolucion {
    id_Devolucion: number;
    detalle_venta_id_detalle_venta: number;
    detalle_venta_id_producto: number;
    motivo: string;
    fecha_devolucion: Date;
    cantidad: number;
  }
  