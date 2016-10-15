Ext.define("PatientChart.view.admin.preexistingconditions.PreExistingConditions", {
	extend: "Ext.window.Window",
	alias: 'widget.preexistingconditions',
	requires: [
		'PatientChart.view.admin.preexistingconditions.PreExistingConditionsModel',
		'PatientChart.view.admin.preexistingconditions.PreExistingConditionsController',
		'Ext.grid.plugin.RowEditing'
	],
	controller: "admin-preexistingconditions-preexistingconditions",
	viewModel: {
		type: "admin-preexistingconditions-preexistingconditions"
	},

	constrain: true,
	width: 600,
	height: 300,
	layout: 'fit',
	title: 'Edit Pre-Existing Conditions',

	tools: [{
		xtype: 'tool',
		type: 'plus',
		callback: 'onAddRecord'
	}, {
		xtype: 'tool',
		type: 'minus',
		callback: 'onDeleteRecords',
		bind: {
			disabled: '{!selectedRecord}'
		}
	}, {
		xtype: 'tool',
		type: 'refresh',
		callback: 'onRefresh'
	}],

	items: [{
		xtype: 'grid',
		bind: {
			selection: '{selectedRecord}'
		},
		header: false,
		store: 'PreExistingConditions',
		reference: 'grid',
		plugins: [{
			ptype: 'rowediting',
			listeners: {
				edit: 'onRowEditingEdit',
				canceledit: 'onRowEditingCancelEdit'
			}
		}],
		columns: [{
			xtype: 'gridcolumn',
			dataIndex: 'text',
			text: 'Label',
			flex: 1,
			editor: {
				xtype: 'textfield',
				allowBlank: false
			}
		}]
	}],
	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		height: 30,
		items: [{
			xtype: 'tbtext',
			flex: 1,
			reference: 'lastupdated',
			bind: {
				text: 'Updated: {grid.selection.updatedate:date(\'m/d/Y H:i a\')} by {grid.selection.updateuser}'
			}
		}]
	}]
});