/**
 * TorrentButton Plugin v0.2.5
 * @name TorrentButton
 * @author VizzleTF
 * @description Adds a separate torrent button to card interface
 * @version 0.2.5
 */

(function () {
    'use strict';

    // Dev-флаг для отладки (включить через window.LAMPA_TB_DEBUG = true)
    var DEBUG = (typeof window !== 'undefined' && !!window.LAMPA_TB_DEBUG);
    function debugLog() {
        if (DEBUG && typeof console !== 'undefined' && typeof console.debug === 'function') {
            try { console.debug.apply(console, arguments); } catch (_) { }
        }
    }

    // Селекторы вынесены в константы для удобства поддержки
    var SELECTORS = {
        newUIButton: '.button--play',
        oldUITorrentButton: '.view--torrent'
    };

    var plugin = {
        name: 'TorrentButton',
        author: 'VizzleTF',
        version: '0.2.5',
        description: 'Adds a separate torrent button to card interface'
    };

    function startPlugin() {
        // Ранние гварды окружения
        if (typeof Lampa === 'undefined' || !Lampa.Listener) {
            debugLog('TorrentButton: Lampa not ready');
            return;
        }
        if (typeof $ === 'undefined') {
            debugLog('TorrentButton: jQuery ($) not available');
            return;
        }

        function moveExistingTorrentButton(e) {
            // Сужаем поиск к контексту активности, fallback на document
            var searchRoot = (e && e.context && e.context.length) ? e.context : $(document);
            var existingTorrentButton = searchRoot
                .find(SELECTORS.oldUITorrentButton)
                .not('.moved-to-card');

            if (existingTorrentButton.length > 0) {
                var torrentButton = existingTorrentButton.first().detach();
                torrentButton.addClass('moved-to-card');
                e.render.before(torrentButton);
                return true;
            } else {
                return false;
            }
        }

        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'complite') {
                setTimeout(function () {
                    var activityRoot = e && e.object && e.object.activity && e.object.activity.render ? e.object.activity.render() : $(document);
                    if (Lampa.Storage.get('card_interfice_type') === 'new') {
                        var targetElement = activityRoot.find(SELECTORS.newUIButton);
                        if (targetElement.length > 0) {
                            moveExistingTorrentButton({
                                context: activityRoot,
                                render: targetElement,
                                movie: e.data.movie
                            });
                        }
                    } else {
                        var targetElement = activityRoot.find(SELECTORS.oldUITorrentButton);
                        if (targetElement.length > 0) {
                            if (!targetElement.hasClass('moved-to-card')) {
                                moveExistingTorrentButton({
                                    context: activityRoot,
                                    render: targetElement,
                                    movie: e.data.movie
                                });
                            }
                        }
                    }
                }, 100);
            }
        });

        try {
            if (Lampa.Activity.active().component == 'full') {
                setTimeout(function () {
                    var activityRootNow = Lampa.Activity.active().activity.render();
                    var targetElement = activityRootNow.find(SELECTORS.oldUITorrentButton);
                    if (targetElement.length > 0 && !targetElement.hasClass('moved-to-card')) {
                        moveExistingTorrentButton({
                            context: activityRootNow,
                            render: targetElement,
                            movie: Lampa.Activity.active().card
                        });
                    }
                }, 200);
            }
        } catch (err) {
            debugLog('TorrentButton: init error', err);
        }
    }

    // Регистрация плагина в Lampa
    if (typeof Lampa !== 'undefined' && Lampa.Plugin) {
        Lampa.Plugin.add({
            plugin_name: plugin.name,
            name: plugin.name,
            author: plugin.author,
            version: plugin.version,
            description: plugin.description
        });
    }

    if (!window.torrent_button_plugin) {
        window.torrent_button_plugin = true;
        startPlugin();
    }
})(); 