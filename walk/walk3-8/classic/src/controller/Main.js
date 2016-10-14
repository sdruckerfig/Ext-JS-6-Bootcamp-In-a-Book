Ext.define('PatientChart.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        currentPerspective: null
    },

    requires: [
        'Ext.app.route.Route'
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
    }
});