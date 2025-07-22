# TorrentButton Plugin - Docker

A plugin for Lampa that improves the display of torrent buttons in movie and TV show card interfaces.

## Description

TorrentButton Plugin automatically moves the torrent button to a more convenient location on content cards in Lampa. The plugin works with both new and classic Lampa interfaces, providing a better user experience when accessing torrent links.

## Quick Start

```bash
docker-compose up -d
```

## Alternative Installation (Lampac Server)

You can also place the plugin directly on your Lampac server:

1. Copy `torrent_button.js` to `wwwroot` directory on your Lampac server
2. Plugin will be available at: `http://your-lampac-ip:port/torrent_button.js`
3. Use this URL in Lampa plugin settings

## Plugin Access

- **Plugin URL**: `http://your-ip:9118/torrent_button.js`

## Lampa Installation

1. Open **Lampa** 
2. **Settings** → **Extensions** → **Add Plugin**
3. Enter URL: `http://your-ip:9118/torrent_button.js`
4. Click **Done**