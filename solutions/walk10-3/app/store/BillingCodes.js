Ext.define('PatientChart.store.BillingCodes', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.BillingCode'
    ],

    model: 'PatientChart.model.BillingCode',
    autoLoad: true
     
});