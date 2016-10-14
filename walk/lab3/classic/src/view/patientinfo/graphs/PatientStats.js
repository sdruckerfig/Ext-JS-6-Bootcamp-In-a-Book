
Ext.define('PatientChart.view.patientinfo.graphs.PatientStats',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientstatsgrid',
    header: false,
    requires: [
        'PatientChart.view.patientinfo.graphs.PatientStatsController'
    ],

    controller: 'patientinfo-graphs-patientstats'
 
});
