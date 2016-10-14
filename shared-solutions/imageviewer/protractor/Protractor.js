Ext.define('Ext.ux.imageviewer.protractor.Protractor', {
    extend: 'Ext.draw.Container',
    xtype: 'draw-protractor',
    controller: 'draw-protractor',

    requires: [
        'Ext.draw.Component',
        'Ext.ux.imageviewer.protractor.Sprite'
    ],

    reference: 'draw',

    sprites: [{
        type: 'protractor',
        id: 'protractor',
        fromX: 325,
        fromY: 250,
        toX: 400,
        toY: 150,
        strokeStyle: 'red'
    }],
    listeners: {
        element: 'el',
        mousedown: 'onMouseDown',
        mousemove: 'onMouseMove'
    }

});