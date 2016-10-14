/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PatientChart.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.ux.imageviewer.ImageViewer'
    ],
    onItemSelected: function(sender, record) {
        var newTab = Ext.create({
            title: 'Chest X-Ray',
            xtype: 'extimageviewer',
            src: PatientChart.AppDefaults.getImageUrl() + 'chestxray.jpg'
        });
        this.getView().add(newTab);
        this.getView().setActiveTab(newTab);
    },

    onConfirm: function(choice) {
        if (choice === 'yes') {
            //
        }
    }
});