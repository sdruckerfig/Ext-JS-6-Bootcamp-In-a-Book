columns: [
    {
        xtype: 'gridcolumn',
        summaryType: 'count',
        dataIndex: 'providername',
        text: 'Provider',
        flex: 1,
        summaryRenderer: function(value, summaryData, dataIndex) {
            return Ext.util.Format.plural(value," Provider");
        }
    },
    {
        xtype: 'gridcolumn',
        width: 50,
        dataIndex: 'providerstate',
        text: 'State'
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'drgcode',
        text: 'Diagnosis',
        hidden: true,
        flex: 1
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
]