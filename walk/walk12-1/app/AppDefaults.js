

Ext.define('PatientChart.AppDefaults', {
    singleton: true,
    requires: ['Ext.window.MessageBox'],
    config: {

        webserviceUrl: 'http://webapps.figleaf.com/rest/prototypes/',
        imageUrl: 'http://webapps.figleaf.com/webservices/media/'
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    version: function() {
        Ext.Msg.alert("Doctor Ext", "Version 1.0");
    }
});