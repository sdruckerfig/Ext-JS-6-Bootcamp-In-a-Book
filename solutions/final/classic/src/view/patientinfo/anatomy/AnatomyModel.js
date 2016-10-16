
Ext.define('PatientChart.view.patientinfo.anatomy.AnatomyModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.patientchartanatomy',

    requires: [
        'Ext.data.Store',
        'Ext.app.bind.Formula',
        'PatientChart.model.AnatomyDiagram'
    ],

    data: {
        diagram: null,
        spriteSegment: 0
    },

    stores: {
        AnatomyDiagrams: {
            autoLoad: true,
            model: 'PatientChart.model.AnatomyDiagram'
        }
    },
    formulas: {
        cssStyle: {
            get: function(data) {
                if (data.diagram) {
                    var imagesPerFile = data.diagram.get('imagesPerClass');
                    var pos = -1 * (data.spriteSegment % imagesPerFile) * data.diagram.get('segmentWidth');

                    var style = {
                        'background-position' : pos + 'px',
                        'background-repeat': 'no-repeat',
                        'background-color' : '#ffffff'
                    };

                    return style;
                }

            },
            bind: {
                spriteSegment: '{spriteSegment}',
                diagram: '{diagram}'
            }
        }
    }

});