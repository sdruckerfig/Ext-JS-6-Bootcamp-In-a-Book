Ext.define('PatientChart.view.research.hospitalinfo.HospitalInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-hospitalinfo-hospitalinfo',
    showDetails: function(grid, record, item, index, e, eOpts) {
        console.log(record, record.$className);
    }

});