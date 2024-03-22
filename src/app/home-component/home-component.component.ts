import { Component } from '@angular/core';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Listado de Empleados';

  constructor(private empleadosService: EmpleadosService) {
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados
  }

  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miempleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    //this.miServicio.muestraMensaje(miempleado.nombre + " " + miempleado.apellido + " agregado correctamente")
    this.empleadosService.agregarEmpleadoServicio(miempleado)
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
}
