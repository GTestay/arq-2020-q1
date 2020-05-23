import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../usuario'; 
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  registrarUsuario(): void {
    this.router.navigate(['usuarios/registro']);
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

}
