
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
    cls: 'credits',
    ui: 'credits',
   
    initComponent: function() {
        Ext.apply(this,{html: Ext.get('aboutDoctorExt').dom.outerHTML});
        this.callParent(arguments);
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        style: {
            'background-color': '#0082c9'
        },
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'button',
            text: 'Get Help',
            href: 'http://www.figleaf.com',
            hrefTarget: '_blank'
        }, {
            xtype: 'button',
            text: 'Get Trained',
            href: 'http://training.figleaf.com/courses/sencha.cfm',
            hrefTarget: '_blank'
        }, {
            xtype: 'button',
            text: 'Contact Us',
            href: 'mailto:info@figleaf.com?subject=Dr%20Ext',
            hrefTarget: '_blank'
        }]
    }]
});