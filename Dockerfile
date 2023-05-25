FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm --f install
COPY . .
CMD ["npm", "start"]