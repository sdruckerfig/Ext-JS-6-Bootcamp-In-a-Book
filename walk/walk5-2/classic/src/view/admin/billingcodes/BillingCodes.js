
Ext.define('PatientChart.view.admin.billingcodes.BillingCodes',{
    extend: 'Ext.window.Window',
    alias: 'widget.billingcodes',
    requires: [
        'PatientChart.view.admin.billingcodes.BillingCodesController',
        'PatientChart.view.admin.billingcodes.BillingCodesModel'
    ],

    controller: 'admin-billingcodes-billingcodes',
    viewModel: {
        type: 'admin-billingcodes-billingcodes'
    },

    constrain: true,
    width: 400,
    height: 250,
    layout: 'fit',
    title: 'Edit Billing Codes',

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
