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

    models: [
        'Patient',
        'Allergy'
    ],

    refs: {
        centerRegion: 'viewport > panel[region=center]',
        navButtons: 'mainnavbar',
        viewport: 'viewport'
    },

    routes: {
        'patient/search': {
            action: 'onPatientSearch',
            before: 'onAuthenticate'
        },
        'patient/:id/:tab': {
            action: 'onLoadPatientRecord',
            conditions: {
                ':id': '([0-9]+)'
            },
            before: 'onAuthenticate'
        },
        'admin': {
            action: 'onAdminPerspective',
            before: 'onAuthenticate'
        },
        'research': {
            action: 'onResearchPerspective'
        },
        'admin/:xtype': {
            action: 'onAdminViewWindow',
            before: 'onAuthenticate'
        },
        'research/:xtype': {
            action: 'onResearchViewWindow'
        },
        'logout': 'onLogout'
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

        var patient =
            this.getCenterRegion().getViewModel().get('patient');
        if (!patient || id != patient.id) {
            this.getCenterRegion()
                .getController()
                .loadPatientRecord(id);
        }

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
    },
    onAuthenticate: function() {
        var action = arguments[arguments.length - 1],
            me = this;
        if (!PatientChart.credentials) {
            Ext.Msg.prompt(
                "Enter your user ID",
                "Enter a username to identify your session",
                function(b, text) {
                    if (b == 'ok') {
                        Ext.Ajax.request({
                            url: 'http://webapps.figleaf.com/rest/prototypes/auth.json',
                            jsonData: {
                                username: text
                            },
                            withCredentials: true,
                            success: function(response, opts) {
                                var obj = Ext.decode(response.responseText);
                                if (obj && obj.success) {
                                    PatientChart.credentials = {
                                        username: obj.username,
                                        role: obj.role
                                    };
                                    // add credentials
                                    var vm = me.getViewport().getViewModel();
                                    vm.set('userName', obj.username);
                                    vm.set('role', obj.role);
                                    if (
                                        (location.hash.indexOf('#patient') ||
                                            location.hash.indexOf('#admin')) &&
                                        obj.role == 'admin') {
                                        action.resume();
                                    } else {
                                        action.stop();
                                    }
                                } else {
                                    Ext.Msg.alert("Authentication Failed", "Try again");
                                    action.stop();
                                }
                            },
                            failure: function() {
                                Ext.Msg.alert("Authentication Failed", "Try again");
                                action.stop();
                            }
                        });
                    } else {
                        Ext.Msg.alert('Authentication Failed',
                            'Please try again');
                        action.stop();
                    }
                },
                this
            );
        } else {
            action.resume();
        }
    },
    onLogout: function() {
        var vm = this.getViewport().getViewModel();
        vm.set('userName', 'anonymous');
        vm.set('role', 'admin');
        PatientChart.credentials = null;
        this.getCenterRegion().destroy();
        this.getViewport().add({
            xtype: 'panel',
            region: 'center',
            hideHeader: true,
            cls: 'appBackground'
        });
        var btn = this.getNavButtons().down('button[pressed=true]');
        if (btn) {
            btn.setPressed(false);
        }
    }
});