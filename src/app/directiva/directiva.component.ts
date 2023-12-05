import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

  listaCurso: string[] = ['Java', 'Spring Boot','Angular'];

  habilitar: boolean=true;

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)?false:true;
  }
}
