
Ext.define('PatientChart.model.BillingCode', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Number',
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            name: 'code'
        },
        {
            name: 'text'
        },
        {
            type: 'string',
            defaultValue: '',
            name: 'description'
        },
        {
            type: 'float',
            defaultValue: 0.00,
            name: 'fee'
        },
        {
            name: 'updateuser'
        },
        {
            type: 'date',
            name: 'updatedate'
        },
        {
            type: 'date',
            name: 'begintime'
        }
    ],

    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/billingcode',
        format: 'json',
        withCredentials: true,
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});