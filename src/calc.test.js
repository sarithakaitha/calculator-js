import { sum } from "./calc";

test('Adding 2 + 3 should give me 5', () => {
    expect(sum(2, 2)).toBe(5);
})
