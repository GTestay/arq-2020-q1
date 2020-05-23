import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {

  nuevoUsuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router, private location: Location) {
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      telefono: '',
      entidad: '',
      cargo: '',
      localidad: ''
    }
  }

  ngOnInit(): void {}

  volverAtras() : void {
    this.location.back();
  }

  guardarUsuario() : void {
    this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
}
