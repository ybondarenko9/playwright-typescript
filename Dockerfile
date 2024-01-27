FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

CMD ["npx", "playwright", "test"]
