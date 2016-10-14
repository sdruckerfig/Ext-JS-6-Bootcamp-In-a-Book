Ext.define('PatientChart.store.Allergies', {
    extend: 'Ext.data.Store',

    requires: [
        'PatientChart.model.Allergy'
    ],
    autoLoad: true,
    model: 'PatientChart.model.Allergy',
    sorters: {
        property: 'text'
    }
});