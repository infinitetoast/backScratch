FROM node
RUN mkdir -p /usr/src/backScratch
WORKDIR /usr/src/backScratch
COPY package.json /usr/src/backScratch
RUN npm install
COPY . /usr/src/backScratch
EXPOSE 3000
CMD [ "npm", "start" ]