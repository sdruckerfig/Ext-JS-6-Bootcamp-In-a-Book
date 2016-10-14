
Ext.define('PatientChart.view.research.hospitals.Hospitals',{
    extend: 'Ext.window.Window',
    alias: 'widget.hospitalstatswindow',
    requires: [
        'PatientChart.view.research.hospitals.HospitalsController',
        'PatientChart.view.research.hospitals.HospitalsModel'
    ],

    controller: 'research-hospitals-hospitals',
    viewModel: {
        type: 'research-hospitals-hospitals'
    },

    constrain: true,
    maximizable: true,
    autoShow: true,
    height: 475,
    width: 1000,
    title: 'Hospital Treatment Costs per Diagnosis'
});
