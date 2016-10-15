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
        'PatientChart.AppDefaults'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],

    controllers: ['Main'],

    launch: function() {
        Ext.state.Manager.setProvider(
            Ext.create('Ext.state.LocalStorageProvider')
        );

        var loadOptions = Ext.Object.fromQueryString(location.search);

        if (!loadOptions.test) {
            Ext.create('PatientChart.view.viewport.Viewport');
        } else {

            // step 3
            this.loadTests();

        }

    },

    loadTests: function() {


        Ext.util.CSS.swapStyleSheet('jasmine', 'jasmine/jasmine.css');

        Ext.Loader.loadScript({
            'url': 'jasmine/jasmine.js',
            scope: window
        });

        Ext.Loader.loadScript({
            'url': 'jasmine/jasmine-html.js',
            scope: window
        });

        Ext.Loader.loadScript({
            'url': 'jasmine/boot.js',
            scope: window
        });

        // walkthrough 12-2,step 5


        Ext.defer(function() {
            window.runJasmine();
        }, 1000, window);

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