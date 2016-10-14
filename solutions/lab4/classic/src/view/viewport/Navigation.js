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
        itemId: 'btnAdminperspective',
        bind: {
            disabled: '{!isAdmin}'
        },
        menu: {
            width: 195,
            items: [{
                text: 'Allergies',
                iconCls: 'nose',
                itemId: 'allergies'
            }, {
                text: 'Pre-Existing Conditions',
                iconCls: 'bottleOfPills',
                itemId: 'preexistingconditions'
            }, {
                text: 'Billing Codes/Procedures',
                iconCls: 'medicalBag',
                itemId: 'billingcodes'
            }],
            listeners: {
                click: 'onAdminMenuItemClick'
            }
        },
        listeners: {
            click: 'onAdminPerspectiveClick',
            arrowclick: 'onAdminPerspectiveClick'
        }
    }, {
        text: 'Patients',
        iconCls: 'btnPatientsIcon',
        itemId: 'btnPatientinfoperspective',
        bind: {
            disabled: '{!isAdmin}'
        },
        menu: {
            width: 170,
            items: [{
                text: 'Search',
                iconCls: 'patientFind'
            }, {
                iconCls: 'patientAdd',
                text: 'Add New'
            }]
        },
        // step 2
        listeners: {
            click: 'onPatientPerspectiveClick',
            arrowclick: 'onPatientPerspectiveClick'
        }
    }, {
        text: 'Research',
        iconCls: 'btnResearchIcon',
        itemId: 'btnResearchperspective',
        menu: {
            width: 170,
            items: [{
                text: 'Clinical Trials',
                iconCls: 'injection',
                itemId: 'clinicaltrialswindow'
            }, {
                text: 'Hospital Stats',
                iconCls: 'hospital',
                itemId: 'hospitalstatswindow'
            }],
            listeners: {
                click: 'onResearchMenuItemClick'
            }
        },
        listeners: {
            click: 'onResearchPerspectiveClick',
            arrowclick: 'onResearchPerspectiveClick'
        }
    }, {
        xtype: 'button',
        text: 'About',
        iconCls: 'btnAbout',
        toggleGroup: null,
        listeners: {
            click: 'onAboutClick'
        }
    },
    {
        xtype: 'button',
        text: 'Log Out',
        iconCls: 'btnLogout',
        handler: 'onLogoutClick'
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        style: {
            'border-top-width': '1px !important'
        },
        items: [{
            xtype: 'tbtext',
            flex: 1,
            style: {
                'text-align': 'center'
            },
            bind: {
                text: '{userName}'
            }
        }]
    }]
});