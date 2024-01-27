FROM node:20-bookworm

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npx -y playwright@1.41.1 install --with-deps

COPY . .

CMD ["npm", "run", "test"]
