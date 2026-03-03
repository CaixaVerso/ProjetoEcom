/**
 * Importa o tipo 'ApplicationConfig', que define a estrutura de configuração do app,
 * e o 'provideBrowserGlobalErrorListeners', uma novidade do Angular para capturar erros globais.
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// Importa a função que "ensina" ao Angular como lidar com as rotas de navegação.
import { provideRouter } from '@angular/router';
// Importa a lista de rotas (o mapa) que você definiu no arquivo 'app.routes.ts'.
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { nofitificaoReducer } from './core/state/notificacao.reducer';
import {provideEffects} from '@ngrx/effects';
/**
 * A constante 'appConfig' é o coração da inicialização.
 * Tudo o que for colocado no array 'providers' ficará disponível para TODO o projeto.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /*GERENCIADOR DE ERROS:
     * Configura o navegador para ouvir e reportar erros que aconteçam na aplicação,
     * ajudando o desenvolvedor a encontrar bugs mais rápido.
     */
    //Melhora a performance ao usar signals para detectar mudanças apenas aonde necessário
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    /*PROVEDOR DE ROTAS:
     * Liga o motor de navegação do Angular usando o mapa de rotas que criamos.
     * Sem isso, os links (routerLink) e o redirecionamento não funcionariam.
     */
    provideRouter(routes),
    //Serviço HTTP habilita a infraestrutura para chamadas de api( Baseado em Observables).
    provideHttpClient(),

    /*
      Esta compondo o "Cofre" (store) com a faria de notificacoes , a chave notificacoes deve ser igual com o do
      selector
    */ 
    provideStore({
        notificacoes: nofitificaoReducer,
    }),

    /*
      O array fica vazio, para ser preparado a infraestrutura
      para as chamadas de api sem quebrar o codigo
    */
    provideEffects([]),
]
};
