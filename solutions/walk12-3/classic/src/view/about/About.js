/**
 * Displays information about the product that is pulled 
 * from a &lt;div&gt; tag on the html page with an id of 'aboutDoctorExt'
 * 
 * Panel is populated by the {@link PatientChart.view.about.AboutController#onAfterRender onAfterRender view controller method}
 *
 * {@img view/about/About.png About Window}
 */
 
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
    html: Ext.get('aboutDoctorExt').dom.outerHTML,
    cls: 'credits',
    ui: 'credits',

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