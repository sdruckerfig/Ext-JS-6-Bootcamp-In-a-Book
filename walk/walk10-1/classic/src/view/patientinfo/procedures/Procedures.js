Ext.define('PatientChart.view.patientinfo.procedures.Procedures', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientprocedures',
    requires: [
       //  'PatientChart.view.patientinfo.procedures.ProceduresController',
        'PatientChart.view.patientinfo.procedures.Form',
        'PatientChart.view.patientinfo.procedures.Grid'
    ],
    // controller: 'patientinfo-procedures-procedures',
    layout: 'border',
    header: false,
    items: [{
        xtype: 'patientproceduregrid',
        flex: 1,
        region: 'center',
        split: true
    }, {
        xtype: 'patientprocedureform',
        flex: 2,
        region: 'south',
        split: true,
        collapsible: true,
        title: 'Patient Charge'
    }]
});