Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-hospitalinfo-hospitalinfo',
    requires: [
        'PatientChart.model.hospitalinfo.State',
        'PatientChart.model.hospitalinfo.City',
        'PatientChart.model.hospitalinfo.Hospital'
    ],
    data: {

    },
    stores: {
        HospitalInfo: {
            type: 'tree',
            root: {
                expanded: true
            },
            proxy: {
                type: 'ajax',
                url: 'http://webapps.figleaf.com/webservices/hospitalresearch.cfc?method=getHospitalInfoByState2',
                reader: {
                    type: 'json',
                    typeProperty: 'nodetype'
                }
            }
        }
    }

});