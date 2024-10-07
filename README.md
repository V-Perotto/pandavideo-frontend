# Panda Video - Frontend

Este é o frontend da aplicação do Teste Panda Video, construída com `Vue.js`. O aplicativo permite que os usuários se autentiquem, visualizem vídeos disponíveis e filtrem por título ou descrição. A aplicação se conecta à API da PandaVideo para realizar operações de autenticação e recuperação de dados.

## Funcionalidades

- **Autenticação de Usuário**: Páginas de login e cadastro com validação de formulário.
- **Página Principal**: Exibe uma lista de vídeos com funcionalidade de busca.
- **Detalhes do Vídeo**: Permite que os usuários assistam vídeos e visualizem informações adicionais.
- **Responsividade**: A aplicação funciona em dispositivos móveis e desktops.

## Tecnologias Utilizadas

- [Vue.js](https://vuejs.org/) - Framework JavaScript para a construção de interfaces de usuário.
- [Vue Router](https://router.vuejs.org/) - Para gerenciamento de rotas.
- [Axios](https://axios-http.com/) - Para realizar requisições HTTP.

## Estrutura do Projeto

```
src/ 
|-- components/ 
| |-- Login.vue 
| |-- Signup.vue 
| |-- VideoList.vue 
| |-- VideoDetail.vue 
|-- views/  
| |-- Home.vue 
| |-- VideoPage.vue 
|-- router/ 
| |-- index.js 
|-- App.vue 
|-- main.js 
```

## Pré-requisitos

Certifique-se de ter o Node.js e npm instalados. Você pode verificar isso executando:

```
node -v
npm -v
```

Além disso, tenha o [Docker](https://www.docker.com/) instalado.

# Instalação

## Método 1: Executar localmente

1. Clone o repositório:
```
git clone <URL_DO_REPOSITORIO>
cd panda-video
```

2. Instale as dependências:
```
npm install
```

3. Inicie o servidor de desenvolvimento:
```
npm run serve
```

4.  Abra seu navegador e acesse http://localhost:8080.

## Método 2: Executar com Docker

1. Clone o repositório:
```
git clone <URL_DO_REPOSITORIO>
cd panda-video
```

2. Construa a imagem Docker:
```
docker build -t panda-video-frontend .
```

3. Execute o contêiner Docker:
```
docker run -p 8080:8080 panda-video-frontend
```

4. Abra seu navegador e acesse http://localhost:8080.
