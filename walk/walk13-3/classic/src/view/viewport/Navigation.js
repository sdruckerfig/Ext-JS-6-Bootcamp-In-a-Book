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

    plugins: [{
        ptype :'boxreorderer',
        listeners: {
            'Drop': function(plugin, container) {
                container.fireEvent('drop')
            }
        }
    }],

    stateEvents: ['drop'],

    stateful: true,
    stateId: 'mainnavbar',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    width: 170,
    bodyPadding: 5,

    title: 'Navigate',
    header: false,
    collapsible: true,
    split: true,
    splitterResize: false,

    defaults: {
        xtype: 'splitbutton',
        height: 45,
        toggleGroup: 'perspectives',
        allowDepress: false
    },
    items: [{
        xtype: 'component',

        width: 150,
        height: 133,
        cls: 'drextlogo',
        itemId: 'drextlogo',
        // step 16
        plugins: 'responsive',
        responsiveConfig: {
            'tall': {
                hidden: true
            },
            'wide': {
                hidden: false
            }
        }
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
        plugins: ['responsive'],
        responsiveConfig: {
            tall: {
                hidden: true
            },
            wide: {
                hidden: false
            }
        },
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


    initComponent: function() {

        var vp = this.up('viewport');

        if (vp.getWidth() > vp.getHeight()) {
          
            Ext.apply(this, {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                width: 170,
                bodyPadding: 5
            });
            this.defaults.flex = null;
            this.defaults.margin = '0 0 10 0';
          
        } else {

            Ext.apply(this, {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                height: 50,
                bodyPadding: 0,
                collapseMode: 'mini'
            });

            this.defaults.flex = 1;
            this.defaults.margin = '0 5 0 0';

        }

        this.callParent(arguments);
    },


    getState: function() {
        var panelState = this.callParent(arguments);
        Ext.apply(
            panelState, {
                itemOrder: Ext.Array.pluck(this.items.items, "itemId")
            }
        );

        return panelState;
    },

    applyState: function(state) {

        var buttonOrder = state.itemOrder;
        this.callParent(arguments);
        var lastItem = null;

        if (buttonOrder) {
            for (var i = buttonOrder.length - 1; i > 0; i--) {
                var cmp = this.down('#' + buttonOrder[i]);
                this.moveBefore(cmp, lastItem);
                lastItem = cmp;
            }
        }
    },

    listeners: {

        'afterrender' : function(cmp) {

            var vp = this.up('viewport');
            if (vp.getWidth() < vp.getHeight()) {
                var buttons = cmp.query('button');
                for (var i=0; i<buttons.length; i++) {
                    buttons[i].setIconCls('');
                }
            }

        }
    }

});