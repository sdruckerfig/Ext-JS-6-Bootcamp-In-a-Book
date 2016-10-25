Ext.define('PatientChart.view.patientinfo.PatientInfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.patientinfo-patientinfo',
    requires: [
    'PatientChart.model.PatientDailyStat',
    'PatientChart.model.PatientVisit'
    ],
    data: {
        searchFilter: '',
        selectedStat: null,
        selectedProcedure: null
    },
    formulas: {
        selectedStatStore: {
            bind: '{selectedStat}',
            get: function(rec) {
                if (rec) {
                    var s = Ext.create('Ext.data.Store', {
                        fields: ['weight', 'height'],
                        data: [{
                            weight: rec.get('weight'),
                            height: rec.get('height')
                        }]
                    });
                    return s;
                }
            }
        }
    },
    stores: {
        Patients: {
            model: 'PatientChart.model.Patient',
            autoLoad: true,
            remoteFilter: true,
            filters: [{
                property: 'lastname',
                value: '{searchFilter}'
            }],
            proxy: {
                type: 'rest',
                url: 'http://webapps.figleaf.com/rest/prototypes/patient',
                format: 'json',
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            }
        },
        PatientDailyStats: {
            model: 'PatientChart.model.PatientDailyStat',
            autoLoad: true,
            remoteFilter: true,
            groupField: 'month',
            filters: [{
                property: 'patientId',
                value: '{patient.id}'
            }],
            sorters: [{
                property: 'date',
                direction: 'ASC'
            }],
            listeners: {
                'load': 'onPatientDailyStatsLoad'
            }
        },

        PatientMediaAssets: {
            model: 'PatientChart.model.PatientMediaAsset',
            autoLoad: true,
            sorters: [{
                property: 'date',
                direction: 'ASC'
            }],
            proxy: {
                type: 'rest',
                url: 'http://webapps.figleaf.com/rest/prototypes/patientmedia',
                format: 'json',
                extraParams: {
                    patientId: '{patient.id}'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'records'
                }
            }
        },
        PatientDiet: {
            autoLoad: true,
            remoteFilter: true,
            fields: [
                'label', {
                    name: 'qty',
                    type: 'int'
                }
            ],
            proxy: {
                type: 'rest',
                url: 'http://webapps.figleaf.com/rest/prototypes/patientdiet',
                format: 'json'
            },
            filters: [{
                property: 'patientId',
                value: '{patient.id}'
            }]
        },

        PatientVisits: {
            model: 'PatientChart.model.PatientVisit',
            autoLoad: true,
            remoteFilter: true,
            filters: [{
                property: 'patientId',
                value: '{patient.id}'
            }],
            sorters: [{
                property: 'date',
                direction: 'DESC'
            }]
        }
    }

});