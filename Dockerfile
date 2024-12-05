# Usar imagem oficial do Node.js
FROM node:18

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos package.json e package-lock.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta 3000
EXPOSE 3001

# Comando para rodar o aplicativo
CMD ["node", "index.js"]
