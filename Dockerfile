FROM nginx:alpine

COPY tb.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 