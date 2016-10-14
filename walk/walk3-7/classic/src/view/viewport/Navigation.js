Ext.define('PatientChart.view.viewport.Navigation', {
    extend: 'Ext.panel.Panel',
    requires: [
        'PatientChart.view.viewport.NavigationController',
        'Ext.layout.container.VBox',
        'Ext.button.Button',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],
    controller: 'viewport-navigation',
    alias: 'widget.mainnavbar',
    width: 170,
    bodyPadding: 5,
    title: 'Navigate',
    header: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        xtype: 'splitbutton',
        height: 45,
        margin: '0 0 10 0',
        toggleGroup: 'perspectives',
        allowDepress: false
    },
    items: [{
        text: 'Administer',
        iconCls: 'btnAdminIcon',
        menu: {
            width: 195,
            items: [{
                text: 'Allergies',
                iconCls: 'nose'
            }, {
                text: 'Pre-Existing Conditions',
                iconCls: 'bottleOfPills'
            }, {
                text: 'Billing Codes/Procedures',
                iconCls: 'medicalBag'
            }]
        }
    }, {
        text: 'Patients',
        iconCls: 'btnPatientsIcon',
        menu: {
            width: 170,
            items: [{
                text: 'Search',
                iconCls: 'patientFind',
            }, {
                iconCls: 'patientAdd',
                text: 'Add New'
            }]
        }
        // step 2: add listener here
    }, {
        text: 'Research',
        iconCls: 'btnResearchIcon',
        menu: {
            width: 170,
            items: [{
                text: 'Clinical Trials',
                iconCls: 'injection'
            }, {
                text: 'Hospital Stats',
                iconCls: 'hospital'
            }]
        }
    }, {
        xtype: 'button',
        text: 'About',
        iconCls: 'btnAbout',
        listeners: {
            click: 'onAboutClick'
        }
    }]
});