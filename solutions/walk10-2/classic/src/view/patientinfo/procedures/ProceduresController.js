Ext.define('PatientChart.view.patientinfo.procedures.ProceduresController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-procedures-procedures',

    onBillingCodeSelect: function(combo, record, eOpts) {
    	
        var rec = this.getViewModel().get('selectedProcedure');
        rec.set({
            'code': record.get('code'),
            'text': record.get('text'),
            'procedureText': record.get('code') + ' - ' + record.get('text'),
            'description': record.get('description'),
            'fee': record.get('fee')
        });
    }

});