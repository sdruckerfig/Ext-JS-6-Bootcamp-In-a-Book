Ext.define('PatientChart.view.patientinfo.ChooserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-chooser',

    onPatientSelect: function(grid, record, item, index, e,
        eOpts) {
        this.redirectTo('patient/' + record.get('id') + '/patientform');
        this.getView().destroy();
    },
    onSearchFieldChange: function(field, newVal, oldVal) {
        this.getViewModel().set('searchFilter', newVal);
    }

});