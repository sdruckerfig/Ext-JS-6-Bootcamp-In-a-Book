Ext.define('PatientChart.view.patientinfo.PatientInfo', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.patientinfoperspective',

    requires: [
        'PatientChart.view.patientinfo.PatientInfoController',
        'PatientChart.view.patientinfo.PatientInfoModel',
        'PatientChart.view.patientinfo.anatomy.Anatomy',
        'PatientChart.view.patientinfo.form.Form',
        'PatientChart.view.patientinfo.graphs.Graphs',
        'PatientChart.view.patientinfo.media.Media',
        'PatientChart.view.patientinfo.procedures.Procedures'
    ],

    controller: 'patientinfo-patientinfo',
    viewModel: {
        type: 'patientinfo-patientinfo'
    },

    layout: 'border',
    header: false,
    title: 'Patient Information',
    items: [{
        xtype: 'patientanatomy',
        region: 'east',
        width: 235,
        title: 'Anatomy',
        split: true,
        collapsible: true
    }, {
        xtype: 'tabpanel',
        region: 'center',
        removePanelHeader: false,
        tabPosition: 'bottom',
        items: [{
            xtype: 'patientform',
            reference: 'patientform',
            title: 'Patient Info',
            tools: [{
                xtype: 'tool',
                type: 'save'
            }]
        }, {
            xtype: 'patientprocedures',
            title: 'Procedures',
            reference: 'procedures'
        }, {
            xtype: 'patientmedia',
            title: 'Media',
            reference: 'media'
        }, {
            xtype: 'patientgraphs',
            title: 'Statistics',
            reference: 'graphs'
        }],
        listeners: {
            'tabchange' : 'onPatientInfoTabChange'
        }
    }]


});