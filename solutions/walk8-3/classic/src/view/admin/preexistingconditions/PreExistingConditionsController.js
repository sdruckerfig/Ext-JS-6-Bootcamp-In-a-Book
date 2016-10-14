Ext.define('PatientChart.view.admin.preexistingconditions.PreExistingConditionsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.admin-preexistingconditions-preexistingconditions',


	onRowEditingEdit: function(editor, context, eOpts) {
		var rec = context.record;

		rec.save({
			success: function(record, operation) {
				if (operation.action == 'create') {
					var pk = Ext.decode(operation.getResponse().responseText).id;
					record.set('id', pk);
				}
				record.set('updatedate', new Date());
				record.set('updateuser', PatientChart.credentials.username);
				record.commit();
			},
			failure: function(record, operation) {
				Ext.Msg.alert('Operation failed', "Please try again later.");

			}
		});
	},

	onRowEditingCancelEdit: function(editor, context, eOpts) {
		var rec = context.record;
		if (rec.phantom) {
			context.grid.getStore().remove(rec);
		}
	},

	onAddRecord: function(tool, e, owner, eOpts) {
		var grid = this.lookupReference('grid');
		var gridStore = grid.getStore();
		var rec = Ext.create(gridStore.model, {
			text: ''
		});
		var rowEditor = grid.editingPlugin;
		rowEditor.cancelEdit();
		gridStore.insert(0, rec);
		rowEditor.startEdit(rec, 0);
	},

	onDeleteRecords: function(tool, e, owner, eOpts) {

		var grid = this.lookupReference('grid');
		var gridStore = grid.getStore();
		var rowEditor = grid.editingPlugin;
		var sm = grid.getSelectionModel();
		var selections = grid.getSelectionModel().getSelection();

		var labels = Ext.Array.pluck(selections, 'data.label');

		Ext.Msg.confirm(
			"Delete " + Ext.util.Format.plural(selections.length, "Pre-Existing Conditions"),
			"Delete " + Ext.util.Format.plural(selections.length, " record?", " records?"),
			function(b) {

				grid.setLoading(true);
				rowEditor.cancelEdit();

				for (var i = 0; i < selections.length; i++) {
					rec = selections[i];
					rec.erase({
						scope: this,
						success: function(record, operation) {
							grid.setLoading(false);
						},
						failure: function(record, operation) {
							grid.setLoading(false);
							Ext.Msg.alert("Operation Failed", "Please try again later or contact your system administrator");
						}
					});
				}

			}
		);

	},

	onRefresh: function(tool, e, owner, eOpts) {
		var grid = this.lookupReference('grid');
		var gridStore = grid.getStore();
		var rowEditor = grid.editingPlugin;
		rowEditor.cancelEdit();
		gridStore.load();
	}

});