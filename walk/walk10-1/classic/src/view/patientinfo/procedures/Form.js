Ext.define('PatientChart.view.patientinfo.procedures.Form', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientprocedureform',
    requires: [
        'PatientChart.view.patientinfo.procedures.FormController',
        'PatientChart.view.patientinfo.procedures.FormModel'
    ],

    controller: 'patientinfo-procedures-form',
    viewModel: {
        type: 'patientinfo-procedures-form'
    }

});