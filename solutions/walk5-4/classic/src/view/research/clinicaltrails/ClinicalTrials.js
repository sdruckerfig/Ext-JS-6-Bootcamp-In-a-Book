Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrials', {
    extend: 'Ext.window.Window',

    requires: [
        'PatientChart.view.research.clinicaltrails.ClinicalTrialsController',
        'PatientChart.view.research.clinicaltrails.ClinicalTrialsModel',
        'Ext.toolbar.Paging'
    ],

    controller: 'research-clinicaltrails-clinicaltrials',
    viewModel: {
        type: 'research-clinicaltrails-clinicaltrials'
    },

    alias: 'widget.clinicaltrialswindow',
    constrain: true,
    maximizable: true,
    autoShow: true,
    height: 397,
    width: 717,
    title: 'Clinical Trials',
    layout: 'fit',
    items: [{
        xtype: 'grid',
        header: false,
        bind: {
            store: '{ClinicalTrials}'
        },
        columns: [{
            xtype: 'rownumberer',
            width: 70
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1
        }, {
            xtype: 'datecolumn',
            dataIndex: 'last_changed',
            text: 'Updated',
            format: 'm/d/Y'
        }, {
            xtype: 'gridcolumn',
            dataIndex: 'status',
            text: 'Status'
        }, {
            xtype: 'numbercolumn',
            align: 'right',
            width: 70,
            dataIndex: 'score',
            text: 'Rel'
        }]
    }],
    tools: [{
        type: 'gear'
    }, {
        type: 'refresh'
    }],
    listeners: {
        afterrender: 'onAfterRender'
    },
    
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        layout: {
            pack: 'center'
        },
        bind: {
            store: '{ClinicalTrials}'
        }
    }]
   
});