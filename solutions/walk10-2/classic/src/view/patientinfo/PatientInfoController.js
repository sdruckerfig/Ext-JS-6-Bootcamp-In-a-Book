Ext.define('PatientChart.view.patientinfo.PatientInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-patientinfo',

    requires: [
        'Ext.ux.imageviewer.ImageViewer',
        'Ext.ux.panel.PDF'
    ],

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
        tabpanelview.add({
            xtype: 'pdfpanel',
            title: title,
            closable: true,
            pageScale: 1,
            src: 'http://webapps.figleaf.com/webservices/media/' + url
        });
    },
    onShowImage: function(tabpanelview, dv, title, url, record) {
        tabpanelview.add({
            xtype: 'extimageviewer',
            title: title,
            closable: true,
            src: 'http://webapps.figleaf.com/webservices/media/' + url,
            imageTitle: record.get('title') + ' on ' +
                Ext.Date.format(record.get('date'), "m/d/Y @ H:i")
        });
    }

});