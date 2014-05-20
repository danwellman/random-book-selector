/*
    (c) 2014 Dan Wellman - danwellman.co.uk
    license: http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true */
/*global jQuery */
(function ($, undefined) {
    'use strict';

    var shuffle, buildList, createListItem, insertToPage,
        defaultConfig = {
            numberOfBooks: 3,
            selector: 'footer .books'
        };

    window.randomImageSelector = window.randomImageSelector || {};

    window.randomImageSelector.init = function init(data, userConfig) {

        var config = $.extend({}, defaultConfig, userConfig),
            shuffledData = shuffle(data),
            bookData = shuffledData.slice(0, config.numberOfBooks),
            $books = buildList(bookData);

        insertToPage(config.selector, $books);
    };

    shuffle = function shuffle(array) {
        var temporaryValue, randomIndex,
            currentIndex = array.length;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    buildList = function buildList(bookData) {
        var $listItems = $();

        $.each(bookData, function (i, itemData) {
            $listItems = $listItems.add(createListItem(itemData));
        });

        return $listItems;
    };

    createListItem = function createListItem(itemData) {
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
    };

    insertToPage = function insertToPage(target, markup) {
        $(target).empty().append(markup);
    };

}(jQuery));