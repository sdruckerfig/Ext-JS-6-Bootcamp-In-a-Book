
Ext.define('PatientChart.view.patientinfo.graphs.WeightGauge',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.weightgauge',
    header: false,
    layout: 'fit',
    requires: [
        'PatientChart.view.patientinfo.graphs.WeightGaugeController',
        'Ext.chart.series.Gauge',
        'Ext.chart.series.sprite.PieSlice'
    ],

    controller: 'patientinfo-graphs-weightgauge',
    
    listeners: {
        afterrender: 'onAfterRender'
    }

});
