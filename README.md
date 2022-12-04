# o que vamos precisar para iniciar o projeto

1.1 NodeJs intaldo;
1.2 Uma conta no MongoDB Atlas pra nuvem;
1.3 Postman para testar nossa API;

# Nosso objetivo

1.1 Criar uma API nos padrões RESTful, quer terá um CRUD;
1.2 Os endpoints serão criados com os verbos HTTP que correspondem a ação do mesmo;
1.3 As respostas serão baseadas em JSON, retornando também o status correto;
1.4 Aplicaremos validações simples, para simular o mundo real;

# iniciando o projeto

npm init -y;

npm install express
npm install nodemon
npm install mongoose

npm install express nodemon mongoose

# criando um script no package.json
na dentro do arquivo onde diz scritps add esse comando.
"start": "nodemon ./index.js localhost 3000"

# criando nosso arquivo principal index.js
e dentro desse arquivo chamar os componente que instalemos
