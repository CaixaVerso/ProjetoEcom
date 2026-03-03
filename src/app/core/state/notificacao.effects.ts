import { inject,Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { delay, map } from "rxjs";
import * as NotificacaoActions from './notificacao.actions'


@Injectable()

    export class NotificacaoEffects{
        // Injeção de dependência da actions
        private actions = inject(Actions);

        //define o processo que roda em segundo palno sem travar a interface
        limparNotificacaoAuto = createEffect(()=>
            //só inicia quando a ação adicionarNotificacao passar pela aplicação
            this.actions.pipe(
                ofType(NotificacaoActions.AdicionarNotificacao),
                //tempo de 3 segundos para sair da tela 
                delay(3000),

                //ao percorer no dispero limpa a lista
                map(()=> NotificacaoActions.limparNotificacoes())
            )
        )
    }
