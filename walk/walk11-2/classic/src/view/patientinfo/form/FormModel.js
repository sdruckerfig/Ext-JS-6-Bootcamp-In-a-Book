Ext.define('PatientChart.view.patientinfo.form.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.patientinfo-form-form',

    stores: {
        States: {
            fields: [{
                name: 'name'
            }, {
                name: 'abbreviation'
            }],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/sampledata/states.json'
            }
        }
    },

    formulas: {
        profileImage: {
            bind: '{patient}',
            get: function(rec) {
                if (rec) {
                    return 'http://webapps.figleaf.com/webservices/images/' + rec.get('photourl');
                }
            }
        },
        gender: {
            bind: '{patient}',
            get: function(rec) {
                if (rec) {
                    console.log({
                        gender: rec.get('gender')
                    });
                    return {
                        gender: rec.get('gender')
                    }
                }
            },
            set: function(obj) {
                this.get('patient').set('gender', obj.gender);
            }
        }
    }
});