Ext.define('PatientChart.model.user.Department', {
    extend: 'Ext.data.TreeModel',
    entityName: 'department',
    fields: [{
        name: 'icon',
        defaultValue: 'resources/images/businesspeople.png'
    }, {
        name: 'text',
        defaultValue: 'New Department'
    }, {
        name: 'leaf',
        defaultValue: false
    }, {
        name: 'allowDrag',
        defaultValue: false
    }]
});