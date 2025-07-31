FROM nginx:alpine

COPY public/tb.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 