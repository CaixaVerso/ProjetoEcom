import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
//importa o serviço global de store para acessar o estado da aplicação
import { Store } from '@ngrx/store';
import { selectListaNotificacoes } from '../../core/state/notificacao.selectors';



@Component({
  selector: 'app-notificacao',
  imports: [CommonModule],
  templateUrl: './notificacao.component.html',
})
export class NotificacaoComponent {

  private store = inject(Store);


  lista$ =this.store.select(selectListaNotificacoes);


}
