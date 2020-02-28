FROM node:12.16.1

ENV HOME=/usr/src/app
WORKDIR $HOME

EXPOSE 3000
CMD ["node", "src/app.js"]
