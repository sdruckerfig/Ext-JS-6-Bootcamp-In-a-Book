Ext.define('PatientChart.view.about.About', {
    extend: 'Ext.window.Window',
    mixins: ['Ext.ux.mixins.WindowAnimations'],
    requires: ['PatientChart.view.about.AboutController'],
    alias: 'widget.about',
    controller: 'about-about',
    closeAnimation: 'switchoff',
    modal: true,
    autoShow: true,
    width: 400,
    height: 300,
    title: 'About Doctor Ext',
    contentEl: 'aboutDoctorExt',
    cls: 'credits'
});

