# TorrentButton Plugin

A plugin for Lampa that adds a separate torrent button to card interface.

## Description

TorrentButton Plugin automatically adds a separate torrent button to content cards in Lampa. The plugin works with both new and classic Lampa interfaces, providing easy access to torrent links directly from the card interface.

## Installation Options

### Option 1: Vercel (Recommended)
1. Plugin is available at: `https://lampac-torrent-button.vercel.app/tb.js` or short: `https://torrb.vercel.app`
2. No installation required - just use the URL directly

### Option 2: Lampac Server (Root directory)
1. Copy `tb.js` to `/home/wwwroot` directory on your Lampac server
2. Plugin will be available at: `http://your-lampac-ip:port/tb.js`

### Option 3: Lampac Server (Plugins subdirectory)
1. Copy `tb.js` to `/home/wwwroot/plugins/` directory on your Lampac server
2. Plugin will be available at: `http://your-lampac-ip:port/plugins/tb.js`

### Option 4: Docker Container
1. Clone repository: `git clone https://github.com/VizzleTF/lampac_torrent_button.git`
2. Navigate to directory: `cd lampac_torrent_button`
3. Run: `docker-compose up -d`
4. Plugin will be available at: `http://your-docker-server-ip:9118/tb.js`

## Lampa Setup

1. Open **Lampa** 
2. **Settings** → **Extensions** → **Add Plugin**
3. Enter one of the URLs above depending on your installation method
4. Click **Done**
