Ext.define('PatientChart.view.viewport.NavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport-navigation',
    requires: [
        'PatientChart.view.about.About'
    ],
    onAboutClick: function(b, e, eOpts) {
        Ext.widget('about', {
            animateTarget: b
        });
    },
    onPatientPerspectiveClick: function() {
        this.redirectTo('patient/search');
    },
    onAdminPerspectiveClick: function() {
        this.redirectTo('admin');
    },
    onResearchPerspectiveClick: function() {
        this.redirectTo('research');
    },
    onAdminMenuItemClick: function(menu, menuitem, e, eOpts) {
        var xtype = menuitem.itemId;
        this.redirectTo('admin/' + menuitem.itemId);
    },
    onResearchMenuItemClick: function(menu, menuitem, e, eOpts) {
        var xtype = menuitem.itemId;
        this.redirectTo('research/' + menuitem.itemId);
    }

});