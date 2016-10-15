Ext.define('PatientChart.view.viewport.Navigation', {
    extend: 'Ext.panel.Panel',
    requires: [
        'PatientChart.view.viewport.NavigationController',
        'Ext.layout.container.VBox',
        'Ext.button.Button',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.ux.BoxReorderer'
    ],
    controller: 'viewport-navigation',
    alias: 'widget.mainnavbar',
    plugins: Ext.create('Ext.ux.BoxReorderer', {
        listeners: {
            'Drop': function(plugin, container) {
                container.fireEvent('drop')
            }
        }
    }),
    stateEvents: ['drop'],

    stateful: true,
    stateId: 'mainnavbar',

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
        xtype: 'component',
        width: 150,
        height: 133,
        cls: 'drextlogo',
        itemId: 'drextlogo'
    }, {
        text: 'Administer',
        iconCls: 'btnAdminIcon',
        itemId: 'btnAdminperspective',
        bind: {
            disabled: '{!isAdmin}'
        },
        menu: {
         
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
            }, {
                text: 'User Accounts',
                iconCls: 'userAccounts',
                itemId: 'editusers'
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
            items: [{
                text: 'Clinical Trials',
                iconCls: 'injection',
                itemId: 'clinicaltrialswindow'
            }, {
                text: 'Hospital Stats',
                iconCls: 'hospital',
                itemId: 'hospitalstatswindow'
            }, {
                text: 'Hospital Procedures',
                iconCls: 'stethoscope',
                itemId: 'hospitalinfotreegrid'
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
        itemId: 'btnAbout',
        text: 'About',
        iconCls: 'btnAbout',
        toggleGroup: null,
        listeners: {
            click: 'onAboutClick'
        }
    }, {
        xtype: 'button',
        text: 'Log Out',
        iconCls: 'btnLogout',
        handler: 'onLogoutClick',
        itemId: 'btnLogout'
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
    }],


    getState: function() {
        var panelState = this.callParent(arguments);
        Ext.apply(
            panelState, {
                itemOrder: Ext.Array.pluck(this.items.items, "itemId")
            }
        );
        console.log('getstate',panelState);
        return panelState;
    },
    applyState: function(state) {

        var buttonOrder = state.itemOrder;
        this.callParent(arguments);
        var lastItem = null;
        console.log('buttonOrder', buttonOrder);
        if (buttonOrder) {
            for (var i = buttonOrder.length -1; i>0; i--) {
                var cmp = this.down('#' + buttonOrder[i]);
                this.moveBefore(cmp, lastItem);
                lastItem = cmp;
            }
        }
    }
});