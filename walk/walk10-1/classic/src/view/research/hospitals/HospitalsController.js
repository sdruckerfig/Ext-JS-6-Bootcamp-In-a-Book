Ext.define('PatientChart.view.research.hospitals.HospitalsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.research-hospitals-hospitals',
    
    onTreepanelCheckChange: function(node, checked, eOpts) {

        var nodeValue = null,
            nodeType = null,
            nodeModifier = null,
            serverFilters = [],
            filters = {};

        var nodes = Ext.Array.merge(
            this.lookupReference('statefiltertree').getChecked(),
            this.lookupReference('procedurefiltertree').getChecked()
        );

        for (var i = 0; i < nodes.length; i++) {

            nodeValue = nodes[i].get('id').split(':');
            nodeType = nodeValue[0];
            nodeModifier = nodeValue[1];

            if (!filters[nodeType]) {
                filters[nodeType] = [];
            }

            filters[nodeType].push(nodeModifier);
        }

        for (var i in filters) {
            serverFilters.push({
                property: i,
                value: filters[i]
            });
        }

        var store = this.getStore('HospitalStats');
        store.clearFilter(true);

        if (serverFilters.length == 0) {
            store.removeAll();
        } else {
            store.filter(serverFilters);
        }
    }

});