
Ext.define('PatientChart.view.patientinfo.anatomy.Anatomy',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientanatomy',
    requires: [
        'PatientChart.view.patientinfo.anatomy.AnatomyController',
        'PatientChart.view.patientinfo.anatomy.AnatomyModel'
    ],

    controller: 'patientinfo-anatomy-anatomy',
    viewModel: {
        type: 'patientinfo-anatomy-anatomy'
    },

    html: 'Hello, World!!'
});
