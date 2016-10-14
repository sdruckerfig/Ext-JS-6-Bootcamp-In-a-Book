onDeleteRecords: function(tool, e, owner, eOpts) {
    var grid = this.lookupReference('grid');
    var gridStore = grid.getStore();
    var rowEditor = grid.editingPlugin;
    var sm = grid.getSelectionModel();
    var selections = grid.getSelectionModel().getSelection();

    var labels = Ext.Array.pluck(selections, 'data.label');

    Ext.Msg.confirm(
        "Delete " + Ext.util.Format.plural(selections.length, "Allergy Record"),
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