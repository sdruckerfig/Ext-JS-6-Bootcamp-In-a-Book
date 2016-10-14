Ext.define('PatientChart.view.patientinfo.media.Media', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientmedia',
    requires: [
        'PatientChart.view.patientinfo.media.MediaController'
    ],

    controller: 'patientinfo-media-media',
    layout: 'fit',
    items: [{
        xtype: 'dataview',
        bind: {
            store: '{PatientMediaAssets}'
        },
        scrollable: true,
        itemCls: 'patientMediaAsset',
        itemTpl: [
            '<img src="http://webapps.figleaf.com/webservices/media/{filepreviewimageurl}">',
            '<strong>{title}<br>{[Ext.Date.format(values.date,"m/d/Y @ H:i")]}</strong>'
        ],
        listeners: {
            'itemdblclick': 'onShowMediaAsset'
        }
    }]


});