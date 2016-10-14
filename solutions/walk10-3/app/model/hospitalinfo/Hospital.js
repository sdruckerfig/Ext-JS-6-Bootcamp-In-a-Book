Ext.define('PatientChart.model.hospitalinfo.Hospital', {
	extend: 'Ext.data.TreeModel',
	entityName: 'hospital',
	fields: [
		'drgcode',
		'totaldischarges',
		'averagetotalpayments',
		'averagemedicarepayments',
		'averagecoveredcharges'
	]
});