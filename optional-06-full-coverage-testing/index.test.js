import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

describe('sum', () => {
  it('should return correct sum of two positive numbers', () => {
    assert.strictEqual(sum(3, 7), 10);
    assert.strictEqual(sum(0, 0), 0);
  });

  it('should return 0 when first argument is not a number', () => {
    assert.strictEqual(sum('a', 2), 0);
    assert.strictEqual(sum(null, 2), 0);
    assert.strictEqual(sum(undefined, 2), 0);
  });

  it('should return 0 when second argument is not a number', () => {
    assert.strictEqual(sum(2, 'b'), 0);
    assert.strictEqual(sum(2, null), 0);
    assert.strictEqual(sum(2, undefined), 0);
  });

  it('should return 0 when both arguments are not numbers', () => {
    assert.strictEqual(sum('a', 'b'), 0);
  });

  it('should return 0 when first argument is negative', () => {
    assert.strictEqual(sum(-1, 5), 0);
  });

  it('should return 0 when second argument is negative', () => {
    assert.strictEqual(sum(5, -1), 0);
  });

  it('should return 0 when both arguments are negative', () => {
    assert.strictEqual(sum(-3, -5), 0);
  });
});
