
Ext.define('PatientChart.view.patientinfo.procedures.Procedures',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientprocedures',
    requires: [
        'PatientChart.view.patientinfo.procedures.ProceduresController'
    ],

    controller: 'patientinfo-procedures-procedures',


    html: 'Hello, World!!'
});
