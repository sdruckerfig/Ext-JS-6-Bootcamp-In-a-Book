

Ext.define('PatientChart.view.patientinfo.anatomy.Anatomy', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.patientanatomy',

    requires: [
        'PatientChart.view.patientinfo.anatomy.AnatomyModel',
        'PatientChart.view.patientinfo.anatomy.AnatomyController',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.slider.Single'
    ],

    controller: 'patientchartanatomy',
    viewModel: {
        type: 'patientchartanatomy'
    },
    reference: 'anatomyviewer',
    width: 235,
    title: 'Anatomy',

    bind: {
        bodyStyle: '{cssStyle}'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            height: 40,
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    fieldLabel: '',
                    labelWidth: 45,
                    emptyText: 'Please Select',
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    valueField: 'name',
                    bind: {
                        store: '{AnatomyDiagrams}',
                        selection: '{diagram}'
                    },
                    listeners: {
                        change: 'onDiagramChange',
                        afterrender: 'onDiagramComboAfterRender'
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: 'basecolorbackground',
            height:30,
            items: [
                {
                    xtype: 'slider',
                    flex: 1,
                    reference: 'spriteSelector',
                    width: 400,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    useTips: false,
                    publishOnComplete: false,
                    bind: {
                        disabled: '{!diagram}',
                        value: '{spriteSegment}'
                    },
                    listeners: {
                        drag: 'onSliderDrag'
                    }
                }
            ]
        }
    ],
    listeners: {
        'rotate': {
            element: 'body',
            fn: 'onRotate',
            stopPropagation: true,
            preventDefault: true,
            buffer: 50
        }
    }

});