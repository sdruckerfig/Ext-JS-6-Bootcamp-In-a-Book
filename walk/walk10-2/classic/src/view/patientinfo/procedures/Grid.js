
Ext.define('PatientChart.view.patientinfo.procedures.Grid',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientproceduregrid',
    requires: [
        'PatientChart.view.patientinfo.procedures.GridController'
    ],

    controller: 'patientinfo-procedures-grid'
   
});
