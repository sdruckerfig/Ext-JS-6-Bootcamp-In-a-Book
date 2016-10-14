Ext.define('PatientChart.model.PatientDailyStat', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'patientId',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'm/d/Y'
    }, {
        name: 'height',
        type: 'float'
    }, {
        name: 'weight',
        type: 'float'
    }, {
        name: 'systolic',
        type: 'int'
    }, {
        name: 'diastolic',
        type: 'int'
    }, {
        name: 'exerciseminutes',
        type: 'int'
    }, {
        name: 'bmi',
        type: 'auto',
        calculate: function(data) {
            var minweight = Math.round(1.8 * data.height);
            var maxweight = Math.round(2.285 * data.height);
            var overweight = Math.round(2.85 * data.height);
            var obese = Math.round(3.71 * data.height);
            return [maxweight, data.weight, obese];
        }
    }],
    proxy: {
        type: 'rest',
        url: 'http://webapps.figleaf.com/rest/prototypes/patientstat',
        format: 'json',
        reader: {
            type: 'json',
            rootProperty: 'records'
        }
    }
});