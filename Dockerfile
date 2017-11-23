FROM node as dashboard-build
WORKDIR /usr/src/app
COPY . .
RUN npm install -g bower && npm install && bower install --allow-root && npm install -g gulp && gulp dist

FROM nginx:alpine
COPY --from=dashboard-build /usr/src/app/build/default/public /var/www/html
COPY default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
