StartTest(function(t) {
    t.diag("Allergies Store");

    var s = Ext.getStore('Allergies');

    t.ok(s, 'Allegies Exists');
	
	var async = t.beginAsync();

	s.load(function(records) {
		t.ok(records.length > 0, records.length + ' allergy records loaded');
		t.endAsync(async);
		t.done();
	});
});