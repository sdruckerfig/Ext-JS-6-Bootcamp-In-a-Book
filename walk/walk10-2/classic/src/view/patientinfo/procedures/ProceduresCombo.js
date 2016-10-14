Ext.define('PatientChart.view.patientinfo.procedures.ProceduresCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.procedurescombo',
    requires: [
        'PatientChart.view.patientinfo.procedures.ProceduresComboController',
        'PatientChart.view.patientinfo.procedures.ProceduresComboModel'
    ],

    controller: 'patientinfo-procedures-procedurescombo',
    viewModel: {
        type: 'patientinfo-procedures-procedurescombo'
    },

    store: 'BillingCodes',
    valueField: 'id',
    queryMode: 'remote',
    forceSelection: true,
    minChars: 2,
    tpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '<div class="x-boundlist-item">{code} - {text}</div>',
        '</tpl>'
    ),
    displayTpl: Ext.create('Ext.XTemplate',
        '<tpl for=".">',
        '{code} - {text}',
        '</tpl>'
    )
});