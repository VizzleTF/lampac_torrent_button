# TorrentButton Plugin - Docker

## Quick Start

```bash
docker-compose up -d
```

## Usage

- **Plugin URL**: `http://your-ip:9118/torrent_button.js`
- **Web Interface**: `http://your-ip:9118`

## Lampa Setup

1. Open **Lampa** 
2. **Settings** → **Extensions** → **Add Plugin**
3. Enter URL: `http://your-ip:9118/torrent_button.js`
4. Click **Done**

## Manual Docker

```bash
docker build -t torrent-button .
docker run -d -p 9118:80 torrent-button
``` 