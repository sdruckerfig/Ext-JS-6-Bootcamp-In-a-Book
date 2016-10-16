Ext.define('PatientChart.view.patientinfo.anatomy.AnatomyController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.patientchartanatomy',

	config: {
		currentSpriteCls: ''
	},

	lastMouseXPosition: null,
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


	onBodyMouseMove: function(e) {

		if (e.pageX > this.lastMouseXPosition + 10) {
			this.lastMouseXPosition = e.pageX;
			var seg = this.getViewModel().get('spriteSegment');
			if (seg < this.lastSegment) {
				this.getViewModel().set('spriteSegment', seg + 1);
				this.setSpriteCls();
			}
		} else if (e.pageX < this.lastMouseXPosition - 10) {
			var seg = this.getViewModel().get('spriteSegment');
			if (seg > 0) {
				this.lastMouseXPosition = e.pageX;
				this.getViewModel().set('spriteSegment', seg - 1);
				this.setSpriteCls();
			}
		}
	},

	onBodyMouseDown: function(e) {
		this.getView().body.on('mousemove', this.onBodyMouseMove, this);
		this.lastMouseXPosition = e.pageX;
	},

	onBodyMouseUp: function() {
		this.getView().body.un('mousemove', this.onBodyMouseMove, this);
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
	},

	onPanelAfterRender: function(component, eOpts) {
		component.body.on('mousedown', this.onBodyMouseDown, this);
		component.body.on('mouseup', this.onBodyMouseUp, this);
	}

});