//importa as funções que servem para filtra e extrair os dados
import { createFeatureSelector,createSelector } from "@ngrx/store";

import { NotificacaoState } from "./notificacao.reducer";

// criar um ponto de acesso para fatia notificaoes
//e aplica o encapsulamento , e o resto da aplicação não precisa saber onde os dados estão no cofre
//apenas usa este seletor como porta de entrada
export const selectNotificacaoState = createFeatureSelector<NotificacaoState>('notificacoes')

/*
Performance
 o createSelector combina seletores para extrair uma informação especifica
 e selectors utilizam o cache(Memoization) se o estado não mudou

*/
export const  selectListaNotificacoes = createSelector(
    selectNotificacaoState, //primeiro localiza a fata de notificacoes
    (state)=>state.lista // acessa a propriedade 'lista' do objeto de estado
)