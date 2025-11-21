import { describe, it, expect } from 'vitest';
import { getRandomId } from '../src/utils.js';

describe('getRandomId', () => {
  it('debe devolver un número', () => {
    const id = getRandomId();
    expect(typeof id).toBe('number');
    expect(Number.isInteger(id)).toBe(true); 
  });

  it('debe devolver valores distintos en llamadas consecutivas', () => {
    const id1 = getRandomId();
    const id2 = getRandomId();
    expect(id1).not.toBe(id2);
  });
});
