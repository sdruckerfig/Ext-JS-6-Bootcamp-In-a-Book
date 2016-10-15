Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrials', {
    extend: 'Ext.window.Window',

    requires: [
        'PatientChart.view.research.clinicaltrails.ClinicalTrialsController',
        'PatientChart.view.research.clinicaltrails.ClinicalTrialsModel'
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
    tools: [
        {type: 'gear'},
        {type: 'refresh'}
    ],
    listeners: {
        afterrender: 'onAfterRender'
    }
});