Ext.define('PatientChart.model.PatientVisit', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'patientId',
        reference: 'PatientChart.model.Patient',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'F, d Y H:i:s'
    }, {
        name: 'procedureId',
        mapping: 'procedureid'
    }, {
        name: 'fee',
        type: 'float'
    }, {
        name: 'notes',
        type: 'string'
    }, {
        name: 'procedureText',
        mapping: 'text',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }],
    validators: {
        procedureText: 'presence',
        procedureId: 'presence',
        fee: 'presence',
        description: 'presence',
        date: 'presence'
    },
    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patientvisit',
        format: 'json',
        withCredentials: true,
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});