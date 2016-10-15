Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfo', {
    extend: 'Ext.window.Window',
    alias: 'widget.hospitalinfotreegrid',
    requires: [
        'PatientChart.view.research.hospitalinfo.HospitalInfoController',
        'PatientChart.view.research.hospitalinfo.HospitalInfoModel'
    ],

    controller: 'research-hospitalinfo-hospitalinfo',
    viewModel: {
        type: 'research-hospitalinfo-hospitalinfo'
    },

    constrain: true,
    autoShow: true,
    maximizable: true,
    height: 475,
    width: 900,
    title: 'Hospital Treatment Costs',
    layout: 'fit',

    items: [{
        xtype: 'treepanel',
        rootVisible: false,
        useArrows: true,
        showHeader: false,
        bind: {
            store: '{HospitalInfo}'
        },
        columns: [{
            xtype: 'treecolumn',
            dataIndex: 'text',
            flex: 1,
            text: 'Hospital'
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'treatmentcount',
            text: '# Treatments',
            format: '0',
            align: 'right',
            width: 140
        }, {
            dataIndex: 'totaldischarges',
            xtype: 'numbercolumn',
            text: 'Discharges',
            format: '0,0',
            align: 'right',
            width: 120
        }, {
            dataIndex: 'averagetotalpayments',
            xtype: 'numbercolumn',
            text: 'Avg Payments',
            format: '0,0',
            align: 'right',
            width: 130
        }, {
            dataIndex: 'averagemedicarepayments',
            xtype: 'numbercolumn',
            text: 'Avg Medicare<br/>Payments',
            format: '0,0',
            align: 'right',
            width: 140
        }, {
            dataIndex: 'averagemedicarepayments',
            xtype: 'numbercolumn',
            text: 'Avg Covered<br/>Charges',
            format: '0,0',
            align: 'right',
             width: 140
        }],
        listeners: {
            itemdblclick: 'showDetails'
        }
    }]
});