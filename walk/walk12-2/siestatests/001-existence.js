StartTest(function(t) {
    t.diag("Existence");

    t.ok(Ext, 'ExtJS is loaded');
    t.ok(Ext.Window, 'Ext.Window class is loaded');
    t.ok(PatientChart, 'The project is loaded');

    t.done();
});