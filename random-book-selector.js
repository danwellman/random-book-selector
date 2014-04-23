﻿;(function ($, undefined) {
    'use strict';

    var defaultConfig = {
        numberOfBooks: 3,
        selector: 'footer .books'
    };

    window.randomImageSelector = window.randomImageSelector || {};

    window.randomImageSelector.init = function init(userConfig, data) {

        var config = $.extend({}, defaultConfig, userConfig),
            shuffledData = shuffle(data),
            bookData = shuffledData.slice(0, config.numberOfBooks),
            $books = buildList(bookData);

        insertToPage(config.selector, $books);
    };

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function buildList(bookData) {
        var $listItems = $();

        $.each(bookData, function (i, itemData) {
            $listItems = $listItems.add(createListItem(itemData));
        });

        return $listItems;
    }

    function createListItem(itemData) {
        var $listItem = $('<li/>'),
            $anchor = $('<a/>', {
                href: itemData.link,
                text: itemData.title
            }).appendTo($listItem);

        $('<img/>', {
            src: itemData.imgSrc,
            width: 92,
            height: 114,
            alt: [itemData.title, ' by ', itemData.authors].join()
        }).prependTo($anchor);

        $('<cite/>', {
            text: itemData.authors
        }).appendTo($anchor);

        return $listItem;
    }

    function insertToPage(target, markup) {
        $(target).empty().append(markup);
    }

}(jQuery));