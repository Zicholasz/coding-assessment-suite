import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

describe('sum', () => {
  it('should return the correct sum of two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  it('should return the correct sum when adding zero', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
  });

  it('should return the correct sum of two large numbers', () => {
    assert.strictEqual(sum(100, 200), 300);
  });
});
