import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/empleado.model';
import { EmpleadosService } from 'src/app/empleados.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css'],
})
export class EditaComponent {
  constructor(
    private route: Router,
    private empleadosService: EmpleadosService,
    private activatedRoute: ActivatedRoute
  ) {}

  /*
  modificaEmpleado() {
    let miempleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleadosService.actualizarEmpleado(this.indice, miempleado);
    this.route.navigate(['']);
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.route.navigate(['']);
  }
  */

  accion: number;
  indice: number;

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  ngOnInit(): void {
    this.accion = parseInt(this.activatedRoute.snapshot.queryParams['accion']);
    this.indice = this.activatedRoute.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome(): void {
    this.route.navigate(['']);
  }

  modificaEmpleado() {
    if (this.accion == 1) {
      let miempleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );
      this.empleadosService.actualizarEmpleado(this.indice, miempleado);
      this.route.navigate(['']);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.route.navigate(['']);
    }
  }
}
