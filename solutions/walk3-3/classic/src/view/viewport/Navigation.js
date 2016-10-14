Ext.define('PatientChart.view.viewport.Navigation', {
    extend: 'Ext.panel.Panel',
    requires: [
        'PatientChart.view.viewport.NavigationController',
        'Ext.layout.container.VBox',
        'Ext.button.Button'
    ],
    controller: 'viewport-navigation',
    alias: 'widget.mainnavbar',
    width: 170,
    bodyPadding: 5,
    title: 'Navigate',
    header: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'button',
        height: 45,
        margin: '0 0 10 0'
    },
    items: [{
        text: 'Administer'
    }, {
        text: 'Patients'
    }, {
        text: 'Research'
    }, {
        text: 'About'
    }]
});