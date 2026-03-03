// importando utilirios para criar as funções 
import { createReducer,on } from "@ngrx/store";
// importa as ações(mensagens) que servirão de gatilhos para as mudanças de estado
import * as Actions from './notificacao.actions'
// importando a interface
import { Notificacao } from "../../models/notificacao";

//Abstração e composição
// definindo a representação do estado
// composição: o estado é um objeto que tem uma lista de objeto Notificacao
export interface NotificacaoState{
    lista:Notificacao[];
}
// definindo o estado inicial seguindo o molde da interface notificacaoState
 export const estadoInicial : NotificacaoState={lista:[]};

 //O Reducer atua como um gerenciador de estados
 //define a estrutura"o que os dados são" e define a transição "como os dados mudam atraves da imutabilidade"
 export const nofitificaoReducer=createReducer(
    estadoInicial,
    //Recebe o objeto "notificacao" vindo da action(encapsulamento)
    //e garante que não altere a instância original e cria um novo objeto de estado na memória
    on(Actions.AdicionarNotificacao,(state, {notificacao})=>{
        return{
            ...state,lista:[...state.lista,notificacao]
        }  
    }),
 )
 //o reducer reage ao singal de limpeza, resetando o objeto de estado para sua forma original 
 //definida no estadoInicial
 on(Actions.limparNotificacoes,()=>estadoInicial)