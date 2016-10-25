Ext.define('PatientChart.view.patientinfo.anatomy.AnatomyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.patientchartanatomy',

    config: {
        currentSpriteCls: ''
    },

    lastAngle: null,
    lastSegment: null,

    setSpriteCls: function() {
        var vm = this.getView().getViewModel();
        var diagram = vm.get('diagram');
        if (diagram) {

            var selector = this.lookupReference('spriteSelector'),
                segments = diagram.get('segments');

            var spriteNum = Math.ceil((vm.get('spriteSegment') + 1) / diagram.get('imagesPerClass'));

            var spriteClass = diagram.get('spriteClass') + spriteNum;

            if (spriteClass != this.currentSpriteCls) {
                this.getView().removeBodyCls(this.currentSpriteCls);
                this.getView().addBodyCls(spriteClass);
                this.currentSpriteCls = spriteClass;
            }
        }

        if (diagram != this.dataDiagram) {
            this.lastSegment = segments - 1;
            selector.setMaxValue(this.lastSegment);
            selector.setValue(0);
            this.dataDiagram = diagram;
            this.setSpriteCls();
        }
    },


    onDiagramChange: function(field, newValue, oldValue, eOpts) {
        this.setSpriteCls();
    },

    onDiagramComboAfterRender: function(component, eOpts) {

        var s = component.getStore();
        if (s) {
            if (s.getCount() == 0) {
                Ext.defer(this.onDiagramComboAfterRender, 200, this, [component, eOpts]);
            } else {
                component.select(s.getAt(0));
                this.setSpriteCls();
            }
        }
    },

    onSliderDrag: function(slider, e, eOpts) {
        this.setSpriteCls();
    }

    

});