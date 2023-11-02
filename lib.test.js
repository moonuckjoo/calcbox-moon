const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
expect(lib.avg([-5, 5])).toBe(0);
});

test("prime(2) should be prime", () => {
expect(lib.prime(2)).toBe(true);
});
test("prime(7) should be prime", () => {
 expect(lib.prime(7)).toBe(true);
});
test("prime(4) should be not prime", () => {
expect(lib.prime(4)).toBe(false);
});

test("fact(4) should be 24", () => {
 expect(lib.fact(4)).toBe(24);
 });
 test("fact(5) should be 120", () => {
expect(lib.fact(5)).toBe(120);
});
test("fact(16) should be -1 ,since 16 is over 15", () => {
expect(lib.fact(16)).toBe(-1);
});