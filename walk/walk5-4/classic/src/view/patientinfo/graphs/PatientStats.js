Ext.define('PatientChart.view.patientinfo.graphs.PatientStats', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.patientstatsgrid',
    header: false,
    requires: [
        'PatientChart.view.patientinfo.graphs.PatientStatsController'
    ],

    controller: 'patientinfo-graphs-patientstats',
    bind: {
        store: '{PatientDailyStats}'
    },


    columns: [

        {
            xtype: 'datecolumn',
            dataIndex: 'date',
            width: 100,
            text: 'Date',
            locked: true
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'height',
            text: 'H',
            align: 'right',
            width: 60,
            format: '00.0'
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'weight',
            text: 'W',
            align: 'right',
            width: 100,
            format: '000.0'
        }, {
            text: 'Blood Pressure',
            columns: [{
                xtype: 'numbercolumn',
                dataIndex: 'systolic',
                text: 'Sys',
                align: 'right',
                width: 100,
                format: '000'
            }, {
                xtype: 'numbercolumn',
                dataIndex: 'diastolic',
                text: 'Dias',
                align: 'right',
                width: 100,
                format: '000',
                renderer: function(value, metadata) {
                    if (value > 85) {
                        metadata.tdStyle = 'font-weight: bold; background-color: red; color: white';
                    }
                    return value;
                }
            }]
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'exerciseminutes',
            text: 'Exercise<br>(Mins)',
            align: 'right',
            width: 100
        }, {
            xtype: 'widgetcolumn',
            flex: 1,
            text: 'Body Mass',
            dataIndex: 'bmi',
            widget: {
                xtype: 'sparklinebullet',
                rangeColors: ['#ffff00'],
                performanceColor: '#006400'
            }
        }
    ]

});