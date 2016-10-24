Ext.define('PatientChart.view.patientinfo.graphs.PatientStatsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientinfo-graphs-patientstats',

    config: {
        control: {
            'grid': {
                addrecord: 'onAddRecord',
                delrecord: 'onDelRecord',
                edit: 'onRowEditingEdit',
                canceledit: 'onRowEditingCancelEdit'
            }
        }
    },

    onAddRecord: function(grid) {

        var gridStore = grid.getStore();
        var lastRec = gridStore.last();
        var rec = Ext.create(gridStore.model, {
            patientId: this.getViewModel().get('patient').id,
            date: new Date(),
            height: lastRec.get('height'),
            weight: lastRec.get('weight')
        });
        var rowEditor = grid.editingPlugin;
        rowEditor.cancelEdit();
        gridStore.insert(0, rec);
        rowEditor.startEdit(rec, 2);
    },

    onDelRecord: function(grid) {

        var gridStore = grid.getStore();
        var rowEditor = grid.editingPlugin;
        var sm = grid.getSelectionModel();
        var selections = grid.getSelectionModel().getSelection();

        var labels = Ext.Array.pluck(selections, 'data.label');

        Ext.Msg.confirm(
            "Delete Record",
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

    onRowEditingEdit: function(editor, context, eOpts) {

        var rec = context.record;

        rec.save({
            success: function(record, operation) {
                if (operation.action == 'create') {
                    var pk = Ext.decode(operation.getResponse().responseText).id;
                    record.set('id', pk);
                }
                record.commit();
            },
            failure: function(record, operation) {
                Ext.Msg.alert('Operation failed', "Please try again later.");
                console.log(arguments);
            }
        });

        rec.commit();
    },

    onRowEditingCancelEdit: function(editor, context, eOpts) {

        var rec = context.record;
        if (rec.phantom) {
            context.grid.getStore().remove(rec);
        }
    }

});