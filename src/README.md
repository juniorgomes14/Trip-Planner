                                                                    Descrição:

Este é um aplicativo web de planejamento de viagens, desenvolvido em React. Ele permite que os usuários adicionem, editem e removam viagens, bem como planejem as atividades da viagem. O aplicativo utiliza o localStorage do navegador para salvar as informações de viagem, garantindo que os dados persistam entre sessões. A interface é organizada com formulários para adicionar novas viagens e uma lista para visualizar e gerenciar as viagens já cadastradas.

                                                                Funcionalidades:


Adicionar novas viagens com detalhes como destino, data de início, data de término e atividades planejadas.
Editar e remover viagens existentes.
Visualizar uma lista de viagens planejadas.
Persistência de dados local usando localStorage.
Estrutura de Arquivos:
TripForm.jsx: Componente responsável pelo formulário para adicionar novas viagens.
TripItem.jsx: Componente responsável por exibir detalhes de cada viagem na lista.
TripList.jsx: Componente que exibe a lista de viagens.
FormList.jsx: Página principal que combina o formulário e a lista de viagens.
App.js: Componente raiz que gerencia as rotas do aplicativo.


                                                                        Instalação:

Pré-requisitos:

Node.js instalado (https://nodejs.org/)
NPM ou Yarn instalado
Passos para Instalação:

Clone este repositório:
bash
Copiar código
git clone https://github.com/juniorgomes14/Trip-Planner.git
Acesse a pasta do projeto:
bash
Copiar código
cd nome-do-repositorio
Instale as dependências:
bash
Copiar código
npm install
# ou, se estiver usando yarn:
yarn install
Executar o projeto localmente:

Para iniciar o servidor de desenvolvimento:
bash
Copiar código
npm start
# ou:
yarn start
O aplicativo estará disponível no navegador em http://localhost:3000.



Uso:

Acesse a página inicial do aplicativo e navegue até a seção de planejamento de viagens.
Utilize o formulário para adicionar as informações da viagem, como destino, datas e atividades.
Na lista de viagens, você pode ver as viagens planejadas, e tem a opção de editar ou remover cada viagem.
Navegação:
A navegação é feita por meio de rotas utilizando o React Router. Na página principal, há links para as páginas de FormList (lista e formulário de viagens).