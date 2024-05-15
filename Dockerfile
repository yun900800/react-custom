FROM node:18-alpine

WORKDIR /react-docker-custom/

COPY public/ /react-docker-custom/public

COPY src/ /react-docker-custom/src

COPY dist/ /react-docker-custom/dist

COPY webpack/ /react-docker-custom/webpack

COPY package.json .babelrc postcss.config.js tailwind.config.js tsconfig.json /react-docker-custom/

# RUN npm install && npm run build
# 这里可以直接打包编译后的文件,这样速度会更加快速

CMD ["npm", "run","run-build"] 