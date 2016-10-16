Ext.define('PatientChart.view.viewport.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'PatientChart.view.viewport.ViewportController',
        'PatientChart.view.viewport.ViewportModel',
        'Ext.layout.container.Border',
        'PatientChart.view.viewport.Navigation',
        'PatientChart.view.patientinfo.PatientInfo'
    ],

    controller: 'viewport-viewport',
    viewModel: {
        type: 'viewport-viewport'
    },

    layout: 'border',

    items: [{
            xtype: 'mainnavbar',
            collapsible: true,
            region: 'west',
            split: true,
            splitterResize: false,
            collapseMode: 'mini'
        }, {
            region: 'center',
            cls: 'appBackground',
            hideHeader: true
        }

    ]

});