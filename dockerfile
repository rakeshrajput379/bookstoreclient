FROM node:16.13.1

WORKDIR /springbootsample/bookstoreclient

COPY package.json /springbootsample/bookstoreclient

RUN cd /springbootsample/bookstoreclient && npm i --only=production

COPY . .

EXPOSE 3000
CMD ["sh", "-c", "node index.js"]