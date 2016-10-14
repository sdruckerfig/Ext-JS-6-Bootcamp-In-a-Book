
Ext.define('PatientChart.view.patientinfo.procedures.Grid',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientproceduregrid',
    requires: [
        'PatientChart.view.patientinfo.procedures.GridController',
        'PatientChart.view.patientinfo.procedures.GridModel'
    ],

    controller: 'patientinfo-procedures-grid',
    viewModel: {
        type: 'patientinfo-procedures-grid'
    },

    html: 'Hello, World!!'
});
