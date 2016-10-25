Ext.define('PatientChart.view.patientinfo.procedures.Procedures', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientprocedures',
    requires: [
        'PatientChart.view.patientinfo.procedures.ProceduresController',
        'PatientChart.view.patientinfo.procedures.Form',
        'PatientChart.view.patientinfo.procedures.Grid'
    ],
    controller: 'patientinfo-procedures-procedures',
    layout: 'border',
    header: false,
    items: [{
        xtype: 'patientproceduregrid',
        flex: 1,
        region: 'center',
        title: 'Visits and Procedures',
        tools: [{
            type: 'plus',
            callback: 'onAddRecord'
        }, {
            type: 'minus',
            callback: 'onDelRecord',
            bind: {
                disabled: '{!selectedProcedure}'
            }
        }, {
            type: 'refresh',
            callback: 'onRefresh'
        },{
            type: 'print',
            callback: 'onDownload'
        }]
    }, {
        xtype: 'patientprocedureform',
        flex: 2,
        region: 'south',
        split: true,
        collapsible: true,
        title: 'Patient Charge'
    }]
});