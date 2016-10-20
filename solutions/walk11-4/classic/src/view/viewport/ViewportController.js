Ext.define('PatientChart.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport-viewport',
    
    onViewportResize: function(vp, width, height, oldWidth, oldHeight, eOpts) {
    	
    	var oldOrientation = (oldWidth > oldHeight ? "wide" : "tall");
    	var newOrientation = (width > height ? "wide" : "tall");
    	
    	if (oldOrientation != newOrientation) {
    		this.lookupReference('navbar').destroy();
    		this.getView().add({
    			xtype: 'mainnavbar',
    			reference: 'navbar'
    		});
    	}
    }
    
});
