#!/usr/bin/node

const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('Tests calculateNumber function', function() {
	describe('calculateNumber', function() {
		it('should return 4 when inputs are 1 and 3', function() {
			assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
		});
	});
	describe('calaculate two floats integers', function() {
		it('should return 2 for (rounded 3.2 and 1.8)', function() {
			assert.strictEqual(calculateNumber('SUBTRACT',3.2, 1.6), 2);
		});
	});
	describe('calaculate float and an integers', function() {
                it('should return 3.9 for (rounded 3.9 and 1)', function() {
                        assert.strictEqual(calculateNumber('DIVIDE',3.9, 1), 4);
                });
        });
	describe('calaculate two floats integers', function() {
                it('should return Error for (rounded 5.2 and 1.8)', function() {
                        assert.strictEqual(calculateNumber('DIVIDE',5.2, 0),'Error');
                });
        });
});
