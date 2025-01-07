# Etapa 1: Build da aplicação Angular
FROM node:lts-alpine AS build

WORKDIR /app 

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install


COPY . .


RUN ng build


# Etapa 2: Servir a aplicação com Nginx
FROM nginx:alpine

COPY --from=build /app/dist/angular-filme/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
