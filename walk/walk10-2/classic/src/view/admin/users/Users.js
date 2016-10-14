Ext.define('PatientChart.view.admin.users.Users', {
    extend: 'Ext.window.Window',
    alias: 'widget.editusers',
    requires: [
        'PatientChart.view.admin.users.UsersController',
        'PatientChart.view.admin.users.UsersModel',
        'Ext.tree.plugin.TreeViewDragDrop',
        'Ext.grid.plugin.CellEditing'
    ],

    controller: 'admin-users-users',
    viewModel: {
        type: 'admin-users-users'
    },
    width: 250,
    height: 500,
    title: 'Edit Users',
    layout: 'fit',
    autoShow: true,
    constrain: true,
    items: [{
        xtype: 'treepanel',
        bind: {
            selection: '{selectedNode}',
            store: '{Users}'
        },
        plugins: [{
            ptype: 'cellediting',
            clicksToEdit: 2
        }],
        viewConfig: {
            plugins: [{
                ptype: 'treeviewdragdrop',
                appendOnly: true,
                nodeHighlightOnDrop: true,
                nodeHighlightOnRepair: true
            }]
        },
        columns: [{
            xtype: 'treecolumn',
            dataIndex: 'text',
            text: 'Departments/Users',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                allowOnlyWhitespace: false,
                maxLength: 100
            }
        }],
        listeners: {
            'edit': 'onNodeEdit'
        }

    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        defaults: {
            flex: 1
        },
        items: [{
            text: 'Add',
            bind: {
                disabled: '{!selectedNode}'
            },
            handler: 'onAddNode'
        }, {
            text: 'Delete',
            bind: {
                disabled: '{!selectedNode}'
            },
            handler: 'onDeleteNode'
        }]
    }]


});