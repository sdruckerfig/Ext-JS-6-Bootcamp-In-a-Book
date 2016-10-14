Ext.define('PatientChart.model.ClinicalTrial', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Number',
        'Ext.data.field.Integer',
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    idProperty: 'nct_id',

    fields: [
        {
            name: 'condition_summary'
        },
        {
            type: 'float',
            name: 'score'
        },
        {
            name: 'nct_id'
        },
        {
            type: 'int',
            name: 'order'
        },
        {
            type: 'date',
            name: 'last_changed',
            dateFormat: 'F j, Y'
        },
        {
            name: 'intervention_summary'
        },
        {
            name: 'status'
        },
        {
            name: 'url'
        },
        {
            name: 'title'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/clinicaltrial',
        format: 'json',
        withCredentials: true,
        reader: {
            type: 'json',
            rootProperty: 'ROWS',
            successProperty: 'SUCCESS',
            totalProperty: 'RESULTS'
        }
    }
});