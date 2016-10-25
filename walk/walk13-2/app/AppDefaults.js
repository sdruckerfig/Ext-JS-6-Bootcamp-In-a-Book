/**
 *
 * Application defaults
 * Singleton that contains base webservice url and outputs
 * version number
 */

Ext.define('PatientChart.AppDefaults', {
    singleton: true,
    requires: ['Ext.window.MessageBox'],
    config: {
        /**
         * The base REST url to access data services
         */
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