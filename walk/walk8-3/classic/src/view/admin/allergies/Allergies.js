Ext.define('PatientChart.view.admin.allergies.Allergies', {
    extend: 'Ext.window.Window',
    alias: 'widget.allergies',
    requires: [
        'PatientChart.view.admin.allergies.AllergiesModel',
        'PatientChart.view.admin.allergies.AllergiesController'
    ],
    controller: "admin-allergies-allergies",
    viewModel: {
        type: "admin-allergies-allergies"
    },

    constrain: true,
    width: 400,
    height: 250,
    layout: 'fit',
    title: 'Edit Allergy Types',
    items: [{
        xtype: 'grid',
        reference: 'grid',
        bind: {
            selection: '{selectedRecord}'
        },
        header: false,
        store: 'Allergies',
        columns: [{
            xtype: 'gridcolumn',
            dataIndex: 'text',
            text: 'Label',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        }],
        plugins: [{
            ptype: 'rowediting',
            listeners: {
                edit: 'onRowEditingEdit',
                canceledit: 'onRowEditingCancelEdit'
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
    }],
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
    }]
});