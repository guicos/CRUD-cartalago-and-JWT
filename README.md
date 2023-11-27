<h1 align="center"> Catálogo de Filmes </h1>

# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Consegue Adicionar Produtos
- `Funcionalidade 2`: Editar Produtos
- `Funcionalidade 3`: Realizar Compra
- `Funcionalidade 4`: Gerenciar Estoque

# 🛠️ Abrir e rodar o projeto

- `Passo 1`: Clone o projeto aonde desejar eu irei usar como exemplo a 'Área de Trabalho'
- `Passo 2`: Pelo terminal acesse a pasta clonada que tera o nome de 'Comunikime'
- `Passo 3`: Rode o comando **docker compose up -d**
- `Passo 4`: Após finalizar a operação acesse via terminal a pasta **/back** altere o arquivo .env dentro da pasta **/back** para **postgres://postgres:root@localhost:5432/postgres?schema=public** essa alteração serve pois na subida do docker referenciamos o conteiner **db** para realizar a conexão com o Banco de Dados, porém para criação da migration necessitamos voltar para **localhost**.
- `Passo 5`: Rode o comando no terminal dentro da pasta **/back** **npm run migration:run** esse comando criara a tabela do banco de dados.
- `Passo 6`: Para finalizar acesse via terminal a pasta **/front** e rode o comando **npm run start**


<p>Acesse a rota do front realize os cadastros e visite a loja</p>
<p>Caso ocorra algum erro na subida do docker solicitamos que limpe a memoria docker e confira para ver se a porta já não esteja sendo utilizada</p>