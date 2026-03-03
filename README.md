

Configuração Global: app.config.ts.

Estrutura Raiz: app.component.ts.

Rotas e Segurança: app.routes.ts, admin.guard.ts.

Dados e Reatividade: ProdutoService, AuthService, CarrinhoService.

Interfaces de Usuário: Login, Lista, Detalhes, Formulários e Shared.

Atividade:

Com base no Projeto Exemplo ajustar para um BancoDev ( banco para consignado desenvolvedores)

Usuario(Cliente)

Criar o Formulario esqueceu sua senha
e o formulario criar sua conta

Gerente(Admin)

Visualiza as solicitações(consignado) desse cliente podendo aprovar ou não solicitação




1. Raiz e Configurações Globais

.angular/ & node_modules/: Pastas geradas automaticamente. Contêm o cache do framework e as bibliotecas (dependências) instaladas.

public/: Armazena ativos estáticos que não passam pelo processo de compilação, como o favicon ou imagens globais.

src/: O coração da aplicação. Todo o código fonte desenvolvido por você reside aqui.

2. O Diretório src/app (Núcleo da Aplicação)

Aqui é onde a lógica de negócio e os componentes são divididos por responsabilidade:

# components/

Organizado por contexto de uso:

admin/: Telas de gerenciamento (Dashboard, Novo Produto).

catalogo/: Telas voltadas ao cliente final (Detalhes do Produto, Listagem).

login.component: Gerencia a autenticação do usuário.

# core/

Contém o que é essencial e único para o funcionamento da App. Geralmente importado apenas uma vez no root:

guards/: Proteção de rotas (ex: impede acesso à pasta admin se não estiver logado).

resolvers/: Pré-carregamento de dados antes de uma página abrir.

services/: Lógica de comunicação com APIs (ex: ProdutoService).

# models/

Define a "forma" dos dados (Interfaces TypeScript):

carrrinhoItem.ts: Estrutura do item no carrinho.

produto.ts: Atributos de um produto (nome, preço, etc).

usuario.ts: Dados do perfil do usuário.


# shared/

Contém componentes reutilizáveis que aparecem em múltiplas páginas, como o Footer (rodapé) e a Navbar (menu de navegação).



Effects: O Mensageiro (lida com o mundo externo, como APIs, sem sujar o componente).

Selectors: A Lupa Otimizada (extrai apenas o dado necessário com cache inteligente).

Entity State: O Organizador de Biblioteca (transforma listas bagunçadas em um catálogo indexado por ID).

Performance: Eficiência Invisível (fazer mais gastando menos processamento e memória).



O admin clica em salvar Produto o component chama o ACTION

o Action chega no REDUCER em vez de jogar a mensagem uma pilha de mensagens, ele guarda em uma gaveta numerado(ID)

com o dado guardado o SELETOR não olha para a pilha de mensagens e sim para a gaveta 


para que essa mensagem fosse apresentenda usa o EFFECTS


e a pagina não precisa perguntar para ela toda o que mudou e sim só a notificação PERFORMANCE(Zoneless)




Atividade criar um Favorito no Cards

Model: Crie uma interface Favorito que estenda Produto ou apenas referencie o id.

Entity State: Configure um favorito.reducer.ts 

Actions: Crie as ações adicionarFavorito e removerFavorito.

Performance & Selectors: No componente , use um Selector que verifica se um ID de produto está presente no dicionário de entidades de favoritos.


