<h1 align="center"> Catálogo de Filmes </h1>

# :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: Consegue Adicionar Filmes
- `Funcionalidade 2`: Editar Filmes
- `Funcionalidade 3`: Buscar Filmes
- `Funcionalidade 4`: Deletar Filmes
- `Funcionalidade 5`: Criar usuario
- `Funcionalidade 5`: Criar Autenticar 

# 🛠️ Abrir e rodar o projeto

- `Passo 1`: Clone o projeto aonde desejar eu irei usar como exemplo a 'Área de Trabalho'
- `Passo 2`: Pelo terminal acesse a pasta clonada que tera o nome de 'catalogue'
- `Passo 3`: Rode o comando **npm install** caso queira rodar local e altere as credencias de banco dentro da pasta **/src/db/data-source.ts** ou rode **docker compose up -d** para utilizar no docker e refencie o banco de dados de sua preferencia podendo ser o banco local do docker sendo assim precisa referenciar o container no arquivo **/src/db/data-source.ts** para ser localizado o host de igual maneira é necessario também apontar a porta corretamente do redis, caso não ocorra isso quebrara a aplicação, porém caso não queira utilizar **Redis** somente alterar o arquivo **/src/catalogue/usecase/find-catalogue.usecase.ts** refenciando o **CatologueRepository** no constructor ao invés da referencia atual e retirar do arquivo **/src/catologue/catologue.module** as chamadas do RedisService e RedisCatologueRepository.
- `Passo 4`: Após realizar algumas das opções de configurações acima pode consumir normalmente.


<p>Acesse tambem caso queira o link do deploy da aplicação na vercel catalogue-five.vercel.app, infelizmente lá não é possivel abrir o swagger, pois ela não tem um pleno suporte para aplicações back-end</p>
<p>Caso ocorra algum erro na subida do docker solicitamos que limpe a memoria docker e confira para ver se a porta já não esteja sendo utilizada</p>
