/**
 * TorrentButton Plugin v2.5.0
 */

(function () {
    'use strict';

    function startPlugin() {
        function moveExistingTorrentButton(e) {
            var existingTorrentButton = $(document).find('.view--torrent').not('.moved-to-card');

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
                    if (Lampa.Storage.get('card_interfice_type') === 'new') {
                        var targetElement = e.object.activity.render().find('.button--play');
                        if (targetElement.length > 0) {
                            moveExistingTorrentButton({
                                render: targetElement,
                                movie: e.data.movie
                            });
                        }
                    } else {
                        var targetElement = e.object.activity.render().find('.view--torrent');
                        if (targetElement.length > 0) {
                            if (!targetElement.hasClass('moved-to-card')) {
                                moveExistingTorrentButton({
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
                    var targetElement = Lampa.Activity.active().activity.render().find('.view--torrent');
                    if (targetElement.length > 0 && !targetElement.hasClass('moved-to-card')) {
                        moveExistingTorrentButton({
                            render: targetElement,
                            movie: Lampa.Activity.active().card
                        });
                    }
                }, 200);
            }
        } catch (e) { }
    }

    if (!window.torrent_button_plugin) {
        window.torrent_button_plugin = true;
        startPlugin();
    }
})(); 