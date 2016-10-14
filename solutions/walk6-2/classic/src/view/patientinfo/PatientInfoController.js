Ext.define('PatientChart.view.patientinfo.PatientInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-patientinfo',

    config: {
        control: {
            'tabpanel': {
                'showpdf': 'onShowPdf',
                'showjpg': 'onShowImage'
            }
        }
    },

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
    },
    loadPatientRecord: function(patientId) {

        // load record
        PatientChart.model.Patient.load(patientId, {
            scope: this,
            failure: function(record, operation) {
                //do something if the load failed
                Ext.Msg.alert("Transaction Failed", "Check the Browser Console Log");
                console.log(arguments);
            },
            success: function(record, operation) {
                //do something if the load succeeded
                this.getViewModel().set('patient', record);
            }
        });
    },
    onPatientDailyStatsLoad: function(store) {
        this.getViewModel().set('selectedStat', store.last());
    },
    onShowPdf: function(tabpanelview, dv, title, url, record) {
        Ext.Msg.alert('Show PDF', url);
    },
    onShowImage: function(tabpanelview, dv, title, url, record) {
        Ext.Msg.alert('Show Image', url);
    }

});