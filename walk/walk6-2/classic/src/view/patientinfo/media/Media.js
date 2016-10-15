Ext.define('PatientChart.view.patientinfo.media.Media', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientmedia',
    requires: [
        'PatientChart.view.patientinfo.media.MediaController'
    ],

   controller: 'patientinfo-media-media',
   html: 'Hello World'


});