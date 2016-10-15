Ext.define('PatientChart.view.patientinfo.procedures.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.patientprocedureform',
    requires: [
        'Ext.layout.container.Column',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'PatientChart.view.patientinfo.procedures.ProceduresCombo',
        'Ext.ux.form.TinyMCETextArea'
    ],

    bind: {
        disabled: '{!selectedProcedure}'
    },


    bodyPadding: 10,

    defaults: {
        anchor: '100%'
    },

    modelValidation: true,


    items: [{
        xtype: 'container',
        layout: 'column',
        defaults: {
            columnWidth: 0.5,
            margin: '0 5 5 0',
        },
        items: [{
            xtype: 'datefield',
            name: 'date',
            fieldLabel: 'Date',
            bind: '{selectedProcedure.date}'
        }, {
            xtype: 'numberfield',
            name: 'fee',
            fieldLabel: 'Fee',
            minValue: 0,
            bind: '{selectedProcedure.fee}'
        }]
    }, {
        xtype: 'procedurescombo',
        fieldLabel: 'Procedure',
        name: 'procedureId',
        bind: '{selectedProcedure.procedureId}'
    }, {
        xtype: 'textfield',
        name: 'description',
        fieldLabel: 'Description',
        bind: '{selectedProcedure.description}'
    }, {
        xtype: 'tinymce',
        name: 'notes',
        anchor: '100% -145',
        fieldLabel: 'Notes',
        labelAlign: 'top',
        bind: '{selectedProcedure.notes}'
    }],

    tools: [{
        type: 'save',
        formBind: true
    }]


});