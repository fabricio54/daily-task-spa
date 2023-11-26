# Estágio de Construção
FROM node:18 as build
WORKDIR /app/react-app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Estágio de Produção
FROM node:18 as PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=build /app/react-app/dist/ /app/react-app/dist/

COPY package.json .
COPY vite.config.js .

# Certifique-se de instalar as dependências novamente no estágio de produção
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "preview"]

