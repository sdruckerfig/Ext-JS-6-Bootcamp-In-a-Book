Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-hospitalinfo-hospitalinfo',
    data: {

    },
    stores: {
        HospitalInfo: {
            type: 'tree',
            fields: [
                'drgcode',
                'totaldischarges',
                'averagetotalpayments',
                'averagemedicarepayments',
                'averagecoveredcharges'
            ],
            root: {
                expanded: true
            },
            proxy: {
                type: 'ajax',
                url: 'http://webapps.figleaf.com/webservices/hospitalresearch.cfc?method=getHospitalInfoByState',
            }
        }
    }

});