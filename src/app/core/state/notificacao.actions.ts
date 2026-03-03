//  importa a funções do Ngrx para criar as mensagens
import {createAction,  props} from '@ngrx/store'
// importando a interface
import { Notificacao } from '../../models/notificacao';

export const AdicionarNotificacao = createAction(
    '[Notificacao] Adicionar',  //Rotulo,(titulo)
    props<{notificacao: Notificacao}>() //Definindo a tipagem baseada na interface e impedindo que objetos inválido sejam enviado para o estado

);
// Uma ação simplificada que representa o comando de limpeza
//sem a necessidade de carregar os dados (propriedades)
export const limparNotificacoes = createAction('[Notificacao] Limpar')