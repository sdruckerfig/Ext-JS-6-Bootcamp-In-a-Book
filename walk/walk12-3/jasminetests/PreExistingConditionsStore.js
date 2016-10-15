describe("PreExistingConditionsStore", function() {

	beforeAll(function() {
		
		this.store = Ext.getStore('PreExistingConditions');
		
		expect(this.store).toBeTruthy();

		this.callbacks = {
			storeLoaded: function(records, operation, success) {
				console.log('hey');
			}
		}

		spyOn(this.callbacks, 'storeLoaded');
		this.store.load(this.callbacks.storeLoaded);
	});

	beforeEach(function(done) {
		if (!this.store.isLoaded()) {
			setTimeout(function() {
				done();
			}, 3000);
		} else {
			done();
		}
	});

	it("storeExists", function() {
		expect(this.store).not.toBeTruthy();
	});

	it("storeHasRecords", function() {
		expect(this.store.getCount()).toBeGreaterThan(0);
	});

	it("was store callback invoked", function() {
		expect(this.callbacks.storeLoaded).toHaveBeenCalled();
	});

});