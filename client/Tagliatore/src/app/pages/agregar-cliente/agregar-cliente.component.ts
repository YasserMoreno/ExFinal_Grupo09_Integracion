import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ClienteService } from '../../services/clienteService/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-cliente',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent, RouterModule, FormsModule],
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {

  // Definimos un objeto cliente vacío para almacenar los datos del formulario
  cliente: Cliente = {
    _id: '',
    nombre: '',
    correo: '',
    telefono: '',
    dni: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  // Método para agregar un nuevo cliente
  agregarCliente(): void {
    this.clienteService.createCliente(this.cliente).subscribe({
      next: (nuevoCliente) => {
        console.log('Cliente creado:', nuevoCliente);
        // Redirigir al listado de clientes u otra vista después de agregar el cliente
        this.router.navigate(['/clientes']);
      },
      error: (err) => {
        console.error('Error al agregar cliente:', err);
      }
    });
  }
}
