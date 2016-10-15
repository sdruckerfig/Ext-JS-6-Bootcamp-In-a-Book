Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrialsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-clinicaltrails-clinicaltrials',

    onAfterRender: function(view) {
    	this.getViewModel().getStore('ClinicalTrials').load();
    },

    onClinicalTrialsLoad: function(store) {
       this.getView().setTitle("Clinical Trials - " + Ext.util.Format.number(store.getTotalCount(),'0,000') + " found");
    }
    
});
