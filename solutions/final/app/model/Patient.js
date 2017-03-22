Ext.define('PatientChart.model.Patient', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email',
        'Ext.data.validator.Inclusion'
    ],
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'firstname',
            type: 'auto'
        }, {
            name: 'lastname',
            type: 'auto'
        }, {
            name: 'dob',
            type: 'date',
            dateFormat: 'F, j Y H:i:s'
        }, {
            name: 'gender',
            type: 'auto'
        }, {
            name: 'email',
            type: 'auto'
        }, {
            name: 'address',
            type: 'auto'
        }, {
            name: 'city',
            type: 'auto'
        }, {
            name: 'state',
            type: 'auto'
        }, {
            name: 'zip',
            type: 'auto'
        }, {
            name: 'photoUrl',
            type: 'auto'
        }, {
            name: 'allergies',
            type: 'auto'
        }, {
            name: 'preexistingconditions',
            type: 'auto'
        }, {
            name: 'notes',
            type: 'auto'
        }

    ],
    validators: {
        firstname: 'presence',
        lastname: 'presence',
        dob: 'presence',
        email: {
            type: 'presence',
            type: 'email'
        },
        gender: [{
            type: 'presence'
        }, {
            type: 'inclusion',
            list: ['Male', 'Female']
        }]
    },
    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patient',
        withCredentials: true,
        format: 'json'
    }
});