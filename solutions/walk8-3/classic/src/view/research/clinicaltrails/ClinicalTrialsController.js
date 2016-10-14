Ext.define('PatientChart.view.research.clinicaltrails.ClinicalTrialsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-clinicaltrails-clinicaltrials',

    requires: [
        'Ext.ux.IFrame'
    ],
    onAfterRender: function(view) {
        this.getViewModel().getStore('ClinicalTrials').load();
    },

    onClinicalTrialsLoad: function(store) {
        this.getView().setTitle("Clinical Trials - " + Ext.util.Format.number(store.getTotalCount(), '0,000') + " found");
    },
    displayTrialWebSite: function(b, e) {
        var perspective = b.up('researchperspective');
        var selectedTrial = this.getViewModel().get('selectedTrial');
        perspective.add({
            xtype: 'window',
            width: 800,
            height: 600,
            title: selectedTrial.get('title'),
            maximizable: true,
            constrain: true,
            layout: 'fit',
            items: [{
                xtype: 'uxiframe',
                src: selectedTrial.get('url')
            }]
        }).show();
    }

});