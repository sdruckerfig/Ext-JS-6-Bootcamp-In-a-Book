
Ext.define('PatientChart.view.patientinfo.graphs.WeightGauge',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.weightgauge',
    header: false,
    layout: 'fit',
    requires: [
        'PatientChart.view.patientinfo.graphs.WeightGaugeController'
    ],

    controller: 'patientinfo-graphs-weightgauge',
    
    listeners: {
        afterrender: 'onAfterRender'
    }

});
