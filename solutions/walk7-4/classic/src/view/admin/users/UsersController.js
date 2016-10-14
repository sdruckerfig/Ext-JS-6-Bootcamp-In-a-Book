Ext.define('PatientChart.view.admin.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-users-users',

    onNodeEdit: function(editor, context, eOpts) {

        var rec = context.record;

        rec.parentNode.sort(function(n1, n2) {
            n1 = n1.get('text');
            n2 = n2.get('text');
            if (n1 < n2) {
                return -1;
            } else if (n1 === n2) {
                return 0;
            }
            return 1;
        });

    },
    onDeleteNode: function(b, e) {
        var selectedNode =
            this.getViewModel().get('selectedNode');
        selectedNode.erase();
    },
    onAddNode: function(b, e) {

        var selectedNode =
            this.getViewModel().get('selectedNode');

        if (selectedNode.id == 'root') {
            var n = Ext.create('PatientChart.model.user.Department', {
                leaf: false
            });
        } else {
            var n = Ext.create('PatientChart.model.user.User', {
                leaf: true
            });
        }
        selectedNode.insertChild(0, n);
        selectedNode.expand();
    }

});