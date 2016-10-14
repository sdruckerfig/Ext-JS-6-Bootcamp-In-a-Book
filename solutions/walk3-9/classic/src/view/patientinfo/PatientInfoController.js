Ext.define('PatientChart.view.patientinfo.PatientInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-patientinfo',

    onPatientInfoTabChange: function(tabpanel, newCard,
        oldCard, eOpts) {
        var hash = location.hash.substring(1,
            location.hash.length);
        var hashArr = hash.split('/');
        var newHash = ''.concat(
            hashArr[0] + "/",
            hashArr[1] + "/",
            newCard.reference
        );
        this.redirectTo(newHash);
    }

});