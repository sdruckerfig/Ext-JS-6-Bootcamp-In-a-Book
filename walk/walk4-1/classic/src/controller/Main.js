Ext.define('PatientChart.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        currentPerspective: null
    },

    requires: [
        'Ext.app.route.Route',
        'PatientChart.view.about.About',
        'PatientChart.view.admin.Admin',
        'PatientChart.view.admin.allergies.Allergies',
        'PatientChart.view.admin.billingcodes.BillingCodes',
        'PatientChart.view.admin.preexistingconditions.PreExistingConditions'
    ],

    refs: {
        centerRegion: 'viewport > panel[region=center]',
        navButtons: 'mainnavbar',
        viewport: 'viewport'
    },

    routes: {
        'patient/search': {
            action: 'onPatientSearch'
         
        },
        'patient/:id/:tab': {
            action: 'onLoadPatientRecord',
            conditions: {
                ':id': '([0-9]+)'
            }
        },
        'admin': {
            action: 'onAdminPerspective'
        },
        'research': {
            action: 'onResearchPerspective'
        },
        'admin/:xtype': {
            action: 'onAdminViewWindow'
        },
        'research/:xtype': {
            action: 'onResearchViewWindow'
        }
    },
    onPatientSearch: function() {
        // patientchartperspective is the xtype for the 
        // patientinfo view
        this.setCurrentPerspective('patientinfoperspective');
    },
    updateCurrentPerspective: function(newPerspective, oldPerspective) {
        if (newPerspective != oldPerspective) {
            if (this.getCenterRegion()) {
                this.getCenterRegion().destroy();
            }
            this.getViewport().add({
                xtype: newPerspective,
                region: 'center'
            });
        }
        this.getNavButtons().down('#btn' + Ext.String.capitalize(newPerspective)).setPressed(true);
    },
    onLoadPatientRecord: function(id, tab) {
        this.setCurrentPerspective('patientinfoperspective');
        if (tab) {
            var tp = this.getCenterRegion().down('tabpanel');
            tp.setActiveTab(
                tp.down('panel[reference=' + tab + ']')
            );
        }
    },
    onAdminPerspective: function() {
        this.setCurrentPerspective('adminperspective');
    },
    onResearchPerspective: function() {
        this.setCurrentPerspective('researchperspective');
    },
    onAdminViewWindow: function(xtype) {
        this.setCurrentPerspective('adminperspective');

        var win = Ext.ComponentQuery.query(xtype);
        if (win.length == 1) {
            this.focusWin(win[0]);
        } else {
            this.getCenterRegion().add({
                xtype: xtype
            }).show();
        }
    },
    focusWin: function(win) {
        Ext.WindowManager.bringToFront(win);
        win.focus();
        win.getEl().frame();
    },
    onResearchViewWindow: function(xtype) {
        this.setCurrentPerspective('researchperspective');

        var win = Ext.ComponentQuery.query(xtype);
        if (win.length == 1) {
            this.focusWin(win[0]);
        } else {
            this.getCenterRegion().add({
                xtype: xtype
            }).show();
        }
    }
    
});