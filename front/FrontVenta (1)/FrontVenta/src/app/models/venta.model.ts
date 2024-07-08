export interface Venta {
    id_Venta: number;
    cliente_Codigo_Cliente: string;
    empleado_Codigo_Empleado: number;
    numero_venta: string;
    fecha_venta: Date;  // Puedes usar string o Date dependiendo de cómo quieras manejar las fechas
    monto: number;
    estado: string;
}