Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrialsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.research-clinicaltrails-clinicaltrials',
    data: {
        name: 'PatientChart'
    },
    stores: {
        ClinicalTrials: {
            model: 'PatientChart.model.ClinicalTrial',
            remoteFilter: true,
            remoteSort: true,
            listeners: {
            	load: 'onClinicalTrialsLoad'
            }
        }
    }
});
