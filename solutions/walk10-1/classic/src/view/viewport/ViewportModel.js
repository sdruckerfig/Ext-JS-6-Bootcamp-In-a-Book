Ext.define('PatientChart.view.viewport.ViewportModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewport-viewport',
    data: {
       userName: 'anonymous',
       role: 'admin'
    },
    formulas: {
		isAdmin: function(get) {
			return (get('role') == 'admin');
		}
	}

});
