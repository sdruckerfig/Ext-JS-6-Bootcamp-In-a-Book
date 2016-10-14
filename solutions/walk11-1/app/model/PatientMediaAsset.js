Ext.define('PatientChart.model.PatientMediaAsset', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
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
        dateFormat: 'm/d/Y'
    }, {
        name: 'title'
    }, {
        name: 'fileUrl'
    }, {
        name: 'filetype'
    }, {
        name: 'filepreviewimageurl'
    }, {
        name: 'description'
    }, {
        name: 'type'
    }, {
        name: 'updateuser'
    }, {
        type: 'date',
        name: 'updatedate',
        dateFormat: 'F, d Y H:i:s'
    }, {
        name: 'datelabel',
        calculate: function(data) {
            return Ext.Date.format(data.date, 'm/d/Y');
        }
    }],
    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patientmedia',
        format: 'json',
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});