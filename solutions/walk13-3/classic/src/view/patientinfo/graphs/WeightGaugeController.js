Ext.define('PatientChart.view.patientinfo.graphs.WeightGaugeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-graphs-weightgauge',

    requires: [
        'Ext.chart.PolarChart'
    ],
    onAfterRender: function(cmp) {
        var binding = this.getViewModel().bind('{selectedStat}', this.onRecordChange, this);
    },

    onRecordChange: function(rec) {

        if (rec) {
            var height = rec.get('height');
            var chartSectors = [{
                // start: height * 1.8,
                end: height * 2.285,
                label: 'Normal',
                color: 'green'
            }, {
                start: height * 2.286,
                color: 'yellow'
            }, {
                start: height * 2.85,
                end: 350,
                label: 'Obese',
                color: 'red'
            }];

            var newSeries = {
                type: 'gauge',
                angleField: 'weight',
                donut: 50,
                colors: ['#0082c9'],
                maximum: 350,
                needle: true,
                sectors: chartSectors
            };

            var config = {
                xtype: 'polar',
                bind: {
                    store: '{selectedStatStore}'
                },
                series: [newSeries]
            }

            this.getView().removeAll(true);
            this.getView().add(config);
        }

    }

});