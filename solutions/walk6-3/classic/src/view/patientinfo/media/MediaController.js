Ext.define('PatientChart.view.patientinfo.media.MediaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-media-media',

    onShowMediaAsset: function(view, record, item, index, e) {
        var pv = view.up('tabpanel');
        var eventName = "show" + record.get('filetype');
        pv.fireEvent(
            eventName,
            pv,
            view,
            record.get('title'),
            record.get('fileurl'),
            record
        );

    }

});