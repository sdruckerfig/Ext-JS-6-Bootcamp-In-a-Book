Ext.define('PatientChart.view.admin.allergies.Allergies', {
    extend: 'Ext.window.Window',
    alias: 'widget.allergies',
    requires: [
        'PatientChart.view.admin.allergies.AllergiesModel',
        'PatientChart.view.admin.allergies.AllergiesController'
    ],
    controller: "admin-allergies-allergies",
    viewModel: {
        type: "admin-allergies-allergies"
    },

    constrain: true,
    width: 400,
    height: 250,
    layout: 'fit',
    title: 'Edit Allergy Types',

    tools: [{
        xtype: 'tool',
        type: 'plus'
    }, {
        xtype: 'tool',
        type: 'minus'
    }, {
        xtype: 'tool',
        type: 'refresh'
    }]
});