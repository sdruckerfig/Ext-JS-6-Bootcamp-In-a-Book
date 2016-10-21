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
    stateId: 'researchClinicalTrialsWindow',
    stateful: true,
    title: 'Clinical Trials',
    layout: 'border',
    items: [{
            xtype: 'grid',
            region: 'center',
            header: false,
            flex: 1,
            stateId: 'researchClinicalTrialsGrid',
            stateful: true,
            bind: {
                store: '{ClinicalTrials}',
                selection: '{selectedTrial}'
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
        }, {
            xtype: 'panel',
            flex: 1,
            region: 'south',
            split: true,
            bodyPadding: 5,
            collapsible: true,
            title: 'Details',
            collapseMode: 'mini',
            bind: {
                data: '{selectedTrial}'
            },
            tpl: [
                '<tpl if="title">',
                '<div class="ctTitle">{title}</div>',
                '<div>',
                '<span class="ctPrompt">Status:</span>',
                '{status}',
                '</div>',
                '<div>',
                '<span class="ctPrompt">Updated:</span>',
                '{last_changed:date}',
                '</div>',
                '<div>',
                '<span class="ctPrompt">Conditions:</span>',
                '{condition_summary}',
                '</div>',
                '<div>',
                '<span class="ctPrompt">Intervention:</span>',
                '{intervention_summary}',
                '</div>',
                '</tpl>'
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                bind: {
                    disabled: '{!selectedTrial}'
                },
                layout: {
                    pack: 'center'
                },
                items: [{
                    text: 'See More Details',
                    handler: 'displayTrialWebSite'
                }]
            }]
        }

    ],
    tools: [{
        type: 'gear',
        callback: 'resetGridState' 
    }, {
        type: 'refresh'
    }],
    listeners: {
        afterrender: 'onAfterRender'
    }
    /*,

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
    */

});