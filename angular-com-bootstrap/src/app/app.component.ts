import { Component } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

defineLocale ('pt-br', ptBrLocale); // Sem essa definição o Calendário não Carrega

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Mudar Idioma do Calendário
  constructor(private localeService: BsLocaleService) {
    this.localeService.use('pt-br');
  }
}
