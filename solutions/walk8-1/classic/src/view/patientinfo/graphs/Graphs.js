Ext.define('PatientChart.view.patientinfo.graphs.Graphs', {
    extend: 'Ext.dashboard.Dashboard',
    alias: 'widget.patientgraphs',
    requires: [
        'PatientChart.view.patientinfo.graphs.GraphsController',
        'PatientChart.view.patientinfo.graphs.HeightWeight',
        'PatientChart.view.patientinfo.graphs.PatientStats',
        'PatientChart.view.patientinfo.graphs.WeightGauge'
    ],

    controller: 'patientinfo-graphs-graphs',
    header: false,
    maxColumns: 3,
    defaultContent: [{
            type: 'weightgauge',
            columnIndex: 0,
            height: 300
        },
        {
            type: 'patientheightweight',
            columnIndex: 1,
            height: 300
        }, {
            type: 'patientdiet',
            height: 300,
            columnIndex: 2
        }, {
            type: 'patientstats',
            columnIndex: 0,
            height: 300
        }
    ],
    parts: {
        patientstats: {
            viewTemplate: {
                title: 'Measurements',
                tools: [{
                    xtype: 'tool',
                    type: 'plus'
                }, {
                    xtype: 'tool',
                    type: 'minus'
                }, {
                    xtype: 'tool',
                    type: 'refresh'
                }],
                items: [{
                    xtype: 'patientstatsgrid'
                }]
            }
        },
        patientheightweight: {
            viewTemplate: {
                title: 'Height/Weight'
            }
        },
        weightgauge: {
            viewTemplate: {
                title: 'Weight'
            }
        },
        patientdiet: {
            viewTemplate: {
                title: 'Diet, Last 30 Days',
                items: [{
                    xtype: 'dietpiechart'
                }],
                tools: [{
                    xtype: 'tool',
                    type: 'refresh',
                    callback: function(pnl, tool) {
                        pnl.down('polar').getStore().load();
                    }
                }]
            }
        }
    }
});