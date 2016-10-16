Ext.define('PatientChart.view.admin.users.UsersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.admin-users-users',
    requires: [
        'PatientChart.model.user.User',
        'PatientChart.model.user.Department'
    ],
    data: {
        selectedNode: null
    },
    stores: {
        Users: {
            type: 'tree',
            rootVisible: true,
            root: {
                expanded: true
            },
            proxy: {
                type: 'ajax',
                url: 'resources/sampledata/treedata.json',
                reader: {
                    typeProperty: 'nodetype',
                    type: 'json'
                }
            }

        }
    }

});