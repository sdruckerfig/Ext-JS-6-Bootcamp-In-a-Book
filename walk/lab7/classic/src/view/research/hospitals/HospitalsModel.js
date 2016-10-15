Ext.define('PatientChart.view.research.hospitals.HospitalsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-hospitals-hospitals',
    requires: ['PatientChart.model.HospitalStat'],
    data: {

    },
    stores: {
        StateFilters: {
            type: 'tree',
            root: {
                expanded: false
            },
            proxy: {
                type: 'ajax',
                url: 'http://webapps.figleaf.com/webservices/hospitalresearch.cfc?method=getStateFilters',
                reader: {
                    type: 'json'
                }
            }
        },
        HospitalStats: {
            groupField: 'drgcode',
            pageSize: 500,
            remoteFilter: true,
            model: 'PatientChart.model.HospitalStat'
        }

    }
});