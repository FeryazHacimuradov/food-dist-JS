window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider');

    calc();
    timer();
    slider();
    tabs();
    modal();
    cards();
    forms();

});