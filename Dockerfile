FROM node:12.16.1

ENV HOME=/usr/src/app
WORKDIR $HOME

COPY package.json $HOME
COPY package-lock.json $HOME

RUN npm install && rm -rf .npm/


EXPOSE 3000
CMD ["npm", "start"]
