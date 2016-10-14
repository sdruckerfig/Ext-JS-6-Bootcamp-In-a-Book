Ext.define('PatientChart.view.admin.billingcodes.BillingCodes', {
	extend: 'Ext.window.Window',
	alias: 'widget.billingcodes',

	requires: [
		'PatientChart.view.admin.billingcodes.BillingCodesModel',
		'PatientChart.view.admin.billingcodes.BillingCodesController',
		'Ext.panel.Tool',
		'Ext.grid.Panel',
		'Ext.grid.View',
		'Ext.grid.plugin.RowEditing',
		'Ext.selection.RowModel',
		'Ext.grid.column.Number',
		'Ext.form.field.Number',
		'Ext.toolbar.Toolbar',
		'Ext.toolbar.TextItem'
	],

	controller: "admin-billingcodes-billingcodes",
	viewModel: {
		type: "admin-billingcodes-billingcodes"
	},
	constrain: true,
	height: 250,
	width: 603,
	layout: 'fit',
	title: 'Edit Billing/Procedure Codes',

	tools: [{
		xtype: 'tool',
		type: 'plus',
		listeners: {
			click: 'onAddRecord'
		}
	}, {
		xtype: 'tool',
		type: 'minus',
		bind: {
			disabled: '{!selectedRecord}'
		},
		listeners: {
			click: 'onDeleteRecords'
		}
	}, {
		xtype: 'tool',
		type: 'refresh',
		listeners: {
			click: 'onRefresh'
		}
	}],
	items: [{
		xtype: 'gridpanel',
		reference: 'grid',
		header: false,
		title: 'My Grid Panel',
		store: 'BillingCodes',
		bind: {
			selection: '{selectedRecord}'
		},
		columns: [{
			xtype: 'gridcolumn',
			dataIndex: 'code',
			text: 'Code',
			editor: {
				xtype: 'textfield',
				allowBlank: false,
				emptyText: 'New Code'
			}
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'text',
			text: 'Label',
			flex: 1,
			editor: {
				xtype: 'textfield',
				allowBlank: false,
				allowOnlyWhitespace: false,
				emptyText: 'New Label'
			}
		}, {
			xtype: 'gridcolumn',
			dataIndex: 'description',
			text: 'Description',
			flex: 1,
			editor: {
				xtype: 'textfield',
				emptyText: 'Description'
			}
		}, {
			xtype: 'numbercolumn',
			dataIndex: 'fee',
			text: 'Fee',
			editor: {
				xtype: 'numberfield',
				allowExponential: false,
				minValue: 0
			}
		}],
		plugins: [{
			ptype: 'rowediting',
			listeners: {
				edit: 'onRowEditingEdit',
				canceledit: 'onRowEditingCancelEdit'
			}
		}],
		selModel: {
			selType: 'rowmodel',
			allowDeselect: true,
			mode: 'MULTI'
		}
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