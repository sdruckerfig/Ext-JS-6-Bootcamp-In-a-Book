Ext.define('PatientChart.view.research.hospitals.Hospitals', {
    extend: 'Ext.window.Window',
    alias: 'widget.hospitalstatswindow',
    requires: [
        'PatientChart.view.research.hospitals.HospitalsController',
        'PatientChart.view.research.hospitals.HospitalsModel',
        'Ext.tree.Panel',
        'Ext.tree.View'
    ],

    controller: 'research-hospitals-hospitals',
    viewModel: {
        type: 'research-hospitals-hospitals'
    },

    layout: 'border',

    constrain: true,
    maximizable: true,
    autoShow: true,
    height: 475,
    width: 1000,
    title: 'Hospital Treatment Costs per Diagnosis',

    items: [{
        region: 'west',
        split: true,
        weight: 50,
        width: 200,
        layout: 'accordion',
        collapsible: true,
        header: false,
        title: 'Filter',
        items: [{
                xtype: 'treepanel',
                title: 'By State',
                rootVisible: false,
                useArrows: true,
                reference: 'statefiltertree',
                bind: {
                    store: '{StateFilters}'
                },
                listeners: {
                    checkchange: 'onTreepanelCheckChange'
                }
            }, {
                xtype: 'treepanel',
                reference: 'procedurefiltertree',
                title: 'By Diagnosis',
                rootVisible: false,
                useArrows: true,
                bind: {
                    store: '{ProcedureFilters}'
                },
                listeners: {
                    checkchange: 'onTreepanelCheckChange'
                }
            }

        ]
    }, {
        xtype: 'gridpanel',
        region: 'center',
        bind: {
            store: '{HospitalStats}'
        },
        reference: 'datagrid',
        title: 'Inpatient Statistics',
        header: false,
        emptyText: 'Please make a selection',
        features: [{
            ftype: 'groupingsummary',
            hideGroupedHeader: true
        }],
        columns: [{
            xtype: 'gridcolumn',
            summaryType: 'count',
            dataIndex: 'providername',
            text: 'Provider',
            flex: 1,
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Ext.util.Format.plural(value, " Provider");
            }
        }, {
            xtype: 'gridcolumn',
            width: 50,
            dataIndex: 'providerstate',
            text: 'State'
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'drgcode',
            text: 'Diagnosis',
            hidden: true,
            flex: 1
        }, {
            xtype: 'numbercolumn',
            summaryType: 'average',
            width: 150,
            align: 'right',
            dataIndex: 'averagecoveredcharges',
            text: 'Avg Covered<br>Charges',
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "Avg: " + Ext.util.Format.currency(value);
            }
        }, {
            xtype: 'numbercolumn',
            width: 150,
            summaryType: 'average',
            align: 'right',
            dataIndex: 'averagemedicarepayments',
            text: 'Avg Medicare<br>Payments',
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "Avg: " + Ext.util.Format.currency(value);
            }
        }, {
            xtype: 'numbercolumn',
            width: 150,
            summaryType: 'average',
            align: 'right',
            dataIndex: 'averagetotalpayments',
            text: 'Avg Tot. Payments',
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "Avg: " + Ext.util.Format.currency(value);
            }
        }, {
            xtype: 'numbercolumn',
            width: 100,
            align: 'right',
            dataIndex: 'totaldischarges',
            text: 'Patients',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "Total: " + value
            }
        }]
    }]
});