Ext.define('PatientChart.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport-viewport',

    onViewportResize: function(vp, width, height, oldWidth, oldHeight, eOpts) {

        var oldOrientation = (oldWidth > oldHeight ? "wide" : "tall");
        var newOrientation = (width > height ? "wide" : "tall");

        if (oldOrientation != newOrientation) {

            var nb = this.lookupReference('navbar');
            if (nb) {
                nb.destroy();
            }

            this.getView().add({
                xtype: 'mainnavbar',
                reference: 'navbar',
                region: newOrientation == "wide" ? "west" : "north"
            });
        }
    },

    onViewportBoxReady: function(vp, width, height) {
        
        this.getView().add({
            xtype: 'mainnavbar',
            reference: 'navbar',
            region: width > height ? "west" : "north"
        });
    }

});