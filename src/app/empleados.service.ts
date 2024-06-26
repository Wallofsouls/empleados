import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { ServicioEmpleadosService } from 'src/app/servicio-empleados.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Ivan', 'W', 'Programador Jr', 2000),
    new Empleado('Anastasiia', 'K', 'Diseñadora Gráfica', 2500),
    new Empleado('Alan', 'X', 'Representante', 2000),
    new Empleado('Andreu', 'X', 'Arquitecto', 2000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario ' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }
}
