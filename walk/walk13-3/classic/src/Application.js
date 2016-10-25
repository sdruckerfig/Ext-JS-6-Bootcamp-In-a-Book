/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('PatientChart.Application', {
    extend: 'Ext.app.Application',

    name: 'PatientChart',

    requires: [
        'PatientChart.view.viewport.Viewport',
        'PatientChart.AppDefaults',
         'Shared.overrides.view.Grid'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    controllers: ['Main'],

    launch: function() {
        Ext.state.Manager.setProvider(
            Ext.create('Ext.state.LocalStorageProvider')
        );
        Ext.create('PatientChart.view.viewport.Viewport');
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});