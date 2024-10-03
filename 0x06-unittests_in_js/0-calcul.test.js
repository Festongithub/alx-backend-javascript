#!/usr/bin/node

const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('Tests calculateNumber function', function() {
	describe('calculateNumber', function() {
		it('should return 4 when inputs are 1 and 3', function() {
			assert.strictEqual(calculateNumber(1, 3), 4);
		});
	});
	describe('calaculate two floats integers', function() {
		it('should return 5 for (rounded 3.2 and 1.8)', function() {
			assert.strictEqual(calculateNumber(3.2, 1.8), 5);
		});
	});
	describe('calaculate float and an integers', function() {
                it('should return 5 for (rounded 3.9 and 1)', function() {
                        assert.strictEqual(calculateNumber(3.9, 1), 5);
                });
        });
	describe('calaculate two floats integers', function() {
                it('should return 5 for (rounded 5.2 and 1.8)', function() {
                        assert.strictEqual(calculateNumber(5.2, 1.8), 7);
                });
        });
});
