FROM node
WORKDIR /usr/src/app
COPY package.json bower.json ./ 
RUN npm install -g bower && npm install && bower install --allow-root && npm install -g gulp
COPY . .
EXPOSE 5000
ENTRYPOINT ["gulp"]