FROM node:18-alpine

WORKDIR /react-docker-custom/

COPY public/ /react-docker-custom/public

COPY src/ /react-docker-custom/src

COPY webpack/ /react-docker-custom/webpack

COPY package.json .babelrc postcss.config.js tailwind.config.js tsconfig.json /react-docker-custom/

RUN npm install && npm run build

CMD ["npm", "run","run-build"] 