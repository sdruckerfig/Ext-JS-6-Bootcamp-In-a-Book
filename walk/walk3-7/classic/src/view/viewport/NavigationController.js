Ext.define('PatientChart.view.viewport.NavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport-navigation',
    requires: [
        'PatientChart.view.about.About'
    ],
    onAboutClick: function(b, e, eOpts) {
        Ext.widget('about');
    }

});