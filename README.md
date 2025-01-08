# AngularFilmes

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

Primeiro executar para baixar as dependências necessarias.

```bash
npm install
```

## Development server

Inicializa o server execute:

```bash
ng serve
```

Para construir o projeto execute:

```bash
ng build
```

Para obter uma lista completa de esquemas disponíveis (`components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

Isso compilará seu projeto e armazenará os artefatos de compilação no diretório `dist/` Por padrão, a compilação de produção otimiza seu aplicativo para desempenho e velocidade.

#Build docker

Isso compilará para uma image docker

```bash
docker build -t angular-filme-app .
```

Isso faz o run da aplicao na porta :8080

```bash
docker run -p 8080:80 angular-filme-app:latest
```

Vá para o naevgador e pesquiser

```bash
http://localhost:8080/

```


For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
