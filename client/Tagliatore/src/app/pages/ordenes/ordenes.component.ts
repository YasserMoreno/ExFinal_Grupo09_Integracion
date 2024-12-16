import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent, RouterModule],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

}
