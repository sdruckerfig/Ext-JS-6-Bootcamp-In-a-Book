Ext.define('PatientChart.model.Patient', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.field.Date'],
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
        email: {type: 'presence', type: 'email'},
        gender: [{
            type: 'presence'
        }, {
            type: 'inclusion',
            list: ['Male', 'Female'],
        }]
    }
});