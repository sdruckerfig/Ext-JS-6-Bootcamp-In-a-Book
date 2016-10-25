
Ext.define('PatientChart.model.AnatomyDiagram', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Integer',
        'Ext.data.proxy.Ajax'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'type'
        },
        {
            name: 'spriteClass'
        },
        {
            type: 'int',
            name: 'segmentWidth'
        },
        {
            type: 'int',
            name: 'segmentHeight'
        },
        {
            type: 'int',
            name: 'segments'
        },
        {
            type: 'int',
            name: 'imagesPerClass'
        }
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/sampledata/anatomy.json'
    }
});