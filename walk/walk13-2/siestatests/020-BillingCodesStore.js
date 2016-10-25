StartTest(function(t) {
    t.diag("BillingCodes Store");

    var s = Ext.getStore('BillingCodes');

	t.expect(s).toBeTruthy();

});