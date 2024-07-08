/* Determinar si la base de datos ya existe */
DROP DATABASE IF EXISTS proyecto;

/* Creación de la base de datos */
CREATE DATABASE proyecto;

/* Poniendo en uso la base de datos */
USE proyecto;

/* Tabla Persona */
CREATE TABLE proyecto.tb_persona (
    Id_Persona INT AUTO_INCREMENT NOT NULL,
    Nit VARCHAR(10),
    Dpi VARCHAR(13),
    Nombre VARCHAR(45) NOT NULL,
    Apellido VARCHAR(45) NOT NULL,
    Telefono VARCHAR(8),
    Direccion VARCHAR(45),
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Persona)
);

/* Tabla Tipo Empleado */
CREATE TABLE proyecto.tb_tipoEmpleado (
    id_tipo_empleado INT AUTO_INCREMENT NOT NULL,
    Tipo_empleado VARCHAR(15) NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (id_tipo_empleado)
);

/* Tabla Almacén */
CREATE TABLE proyecto.tb_almacen (
    Id_Almacen INT AUTO_INCREMENT NOT NULL,
    Nombre_almacen VARCHAR(45) NOT NULL,
    Direccion_almacen VARCHAR(45) NOT NULL,
    Telefono_almacen VARCHAR(8) NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Almacen)
);

/* Tabla Empleado */
CREATE TABLE proyecto.tb_empleado (
    Id_Persona INT,
    Codigo_Empleado INT AUTO_INCREMENT NOT NULL,
    Tipo_Empleado_id_tipo_empleado INT NOT NULL,
    Almacen_Id_Almacen INT NOT NULL,
    Usuario VARCHAR(30) NOT NULL,
    Clave VARCHAR(10) NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Codigo_Empleado),
    FOREIGN KEY (Id_Persona) REFERENCES proyecto.tb_persona (Id_Persona) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Tipo_Empleado_id_tipo_empleado) REFERENCES proyecto.tb_tipoEmpleado (id_tipo_empleado) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Almacen_Id_Almacen) REFERENCES proyecto.tb_almacen (Id_Almacen) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Tabla Tipo Cliente */
CREATE TABLE proyecto.tb_tipoCliente (
    Id_Tipocliente INT AUTO_INCREMENT NOT NULL,
    Tipo_cliente VARCHAR(1) NOT NULL,
    Descuento DOUBLE NOT NULL,
    PRIMARY KEY (Id_Tipocliente)
);

/* Tabla Cliente */
CREATE TABLE proyecto.tb_cliente (
    Id_Persona INT NOT NULL,
    Codigo_Cliente VARCHAR(45) NOT NULL,
    tipo_cliente_id_tipo_cliente INT NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Codigo_Cliente),
    FOREIGN KEY (tipo_cliente_id_tipo_cliente) REFERENCES proyecto.tb_tipoCliente (Id_Tipocliente) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Id_Persona) REFERENCES proyecto.tb_persona (Id_Persona) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Tabla Venta */
CREATE TABLE proyecto.tb_venta (
    Id_Venta INT AUTO_INCREMENT NOT NULL,
    Cliente_Codigo_Cliente VARCHAR(45) NOT NULL,
    Empleado_Codigo_Empleado INT NOT NULL,
    Numero_venta VARCHAR(244) NOT NULL,
    Fecha_venta DATE NOT NULL,
    Monto DOUBLE NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Venta),
    FOREIGN KEY (Empleado_Codigo_Empleado) REFERENCES proyecto.tb_empleado (Codigo_Empleado) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Cliente_Codigo_Cliente) REFERENCES proyecto.tb_cliente (Codigo_Cliente) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Tabla Proveedor */
CREATE TABLE proyecto.tb_proveedor (
    Id_Proveedor INT AUTO_INCREMENT NOT NULL,
    Nombre_proveedor VARCHAR(45) NOT NULL,
    Telefono_proveedor VARCHAR(8) NOT NULL,
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Proveedor)
);

/* Tabla Categoria */
CREATE TABLE proyecto.tb_categoria (
    Id_Categoria INT AUTO_INCREMENT NOT NULL,
    Nombre_categoria VARCHAR(45) NOT NULL,
    Descripcion VARCHAR(45),
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Categoria)
);

/* Tabla Producto */
CREATE TABLE proyecto.tb_producto (
    Id_Producto BIGINT AUTO_INCREMENT NOT NULL,
    Categoria_Id_Categoria INT NOT NULL,
    Proveedor_Id_Proveedor INT NOT NULL,
    Almace_Id_Almacen INT NOT NULL,
    Nombre_producto VARCHAR(45) NOT NULL,
    Precio DOUBLE NOT NULL,
    Stock INT NOT NULL,
    Descripcion VARCHAR(45),
    Estado VARCHAR(1) NOT NULL,
    PRIMARY KEY (Id_Producto),
    FOREIGN KEY (Categoria_Id_Categoria) REFERENCES proyecto.tb_categoria (Id_Categoria) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Proveedor_Id_Proveedor) REFERENCES proyecto.tb_proveedor (Id_Proveedor) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Almace_Id_Almacen) REFERENCES proyecto.tb_almacen (Id_Almacen) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Tabla Detalle Venta */
CREATE TABLE proyecto.tb_detalleVenta (
    Id_Detalle_Venta INT AUTO_INCREMENT NOT NULL,
    Venta_Id_venta INT,
    Producto_Id_Producto BIGINT,
    Cantidad INT NOT NULL,
    Precio_venta DOUBLE NOT NULL,
    PRIMARY KEY (Id_Detalle_Venta),
    FOREIGN KEY (Producto_Id_Producto) REFERENCES proyecto.tb_producto (Id_Producto) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Venta_Id_venta) REFERENCES proyecto.tb_venta (Id_Venta) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Tabla Devolucion */
CREATE TABLE proyecto.tb_devolucion (
    Id_Devolucion INT AUTO_INCREMENT NOT NULL,
    detalle_venta_id_detalle_venta INT,
    detalle_venta_id_producto BIGINT,
    Motivo VARCHAR(45),
    Fecha_devolucion DATE,
    Cantidad INT,
    PRIMARY KEY (Id_Devolucion),
    FOREIGN KEY (detalle_venta_id_detalle_venta) REFERENCES proyecto.tb_detalleVenta (Id_Detalle_Venta) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (detalle_venta_id_producto) REFERENCES proyecto.tb_detalleVenta (Producto_Id_Producto) ON DELETE CASCADE ON UPDATE CASCADE
);