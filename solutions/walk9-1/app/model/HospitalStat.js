
Ext.define('PatientChart.model.HospitalStat', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Number',
        'Ext.data.field.Integer',
        'Ext.data.proxy.JsonP'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            type: 'float',
            name: 'averagecoveredcharges'
        },
        {
            type: 'float',
            name: 'averagemedicarepayments'
        },
        {
            type: 'float',
            name: 'averagetotalpayments'
        },
        {
            name: 'drgcode'
        },
        {
            name: 'city'
        },
        {
            name: 'providerstate'
        },
        {
            name: 'providername'
        },
        {
            type: 'int',
            name: 'totaldischarges'
        }
    ],

    proxy: {
        type: 'jsonp',
        url: 'http://webapps.figleaf.com/webservices/hospitalresearch.cfc?method=search'
    }
});