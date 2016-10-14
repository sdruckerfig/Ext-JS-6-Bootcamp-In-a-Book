Ext.define('PatientChart.view.patientinfo.form.FormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientinfo-form-form',

	onFormBeforeRender: function(component, eOpts) {
		var pc = this.lookupReference('preexistingconditions');
		var s = Ext.getStore('PreExistingConditions');
		if (s.getCount() == 0) {
			Ext.defer(this.onFormBeforeRender, 100, this, [component, eOpts]);
		} else {
			pc.removeAll();
			var cboxes = [];
			for (var i = 0; i < s.getCount(); i++) {
				cboxes.push({
					xtype: 'checkbox',
					name: 'preexistingcondition',
					boxLabel: s.getAt(i).get('text'),
					inputValue: s.getAt(i).get('id')
				});
			}
			pc.add(cboxes);
		}
	},


	postPhoto: function(form) {
		form.submit({
			url: 'http://webapps.figleaf.com/webservices/savepatient.cfm',
			success: function(form, action) {
				Ext.Msg.alert("Success!");
			},
			failure: function(form, action) {
				// will always fail if x-domain
				/*
				switch (action.failureType) {
					case Ext.form.action.Action.CLIENT_INVALID:
						Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
						break;
					case Ext.form.action.Action.CONNECT_FAILURE:
						Ext.Msg.alert('Failure', 'Ajax communication failed');
						break;
					case Ext.form.action.Action.SERVER_INVALID:
						Ext.Msg.alert('Failure', action.result.msg);
				}
				*/

			}
		});
	},

	saveForm: function(form, tool) {
		var record = this.getViewModel().get('patient');

		// save metatdata through proxy
		record.save({
			success: function(rec, operation) {
				Ext.toast('Record Updated', 'Server Transaction', 't');
				if (operation.action == 'create') {
					var pk = Ext.decode(operation.getResponse().responseText).id;
					record.set('id', pk);
				}
				this.postPhoto(form);
			},
			failure: function(rec, operation) {
				Ext.Msg.alert("Failure", "Operation failed. Check your browser console");
				console.log(arguments);
			},
			scope: this
		});

	}

});