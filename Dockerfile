FROM nginx:alpine

COPY torrent_button.js /usr/share/nginx/html/

RUN echo '<!DOCTYPE html><html><head><title>TorrentButton Plugin</title></head><body><h1>TorrentButton Plugin v2.5.0</h1><p><a href="/torrent_button.js">Download torrent_button.js</a></p><p>Lampa URL: <code>http://your-ip:port/torrent_button.js</code></p></body></html>' > /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 