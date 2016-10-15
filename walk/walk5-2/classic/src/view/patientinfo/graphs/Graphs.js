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
    maxColumns: 2,
    defaultContent: [{
        type: 'patientstats',
        columnIndex: 0,
        height: 300
    }, {
        type: 'patientheightweight',
        columnIndex: 0,
        height: 300
    }, {
        type: 'weightgauge',
        columnIndex: 1,
        height: 300
    }],
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
                }]
                // step 34
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
        }
    }
});