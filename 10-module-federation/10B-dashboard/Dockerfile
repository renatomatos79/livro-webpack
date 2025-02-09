FROM nginx:alpine
LABEL maintainer='Renato Matos'
WORKDIR /usr/share/nginx/html/dash
COPY ./dist/ .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80