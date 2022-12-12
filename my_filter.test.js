const arrayFilter = require("./test/my_filter");

describe("Filter Array", () => {
  const testCases = [
    { in: [0, 1, 2, 3, 4, 5, 6], expected: [0, 2, 4, 6] },
    {
      in: [true, false, true, false, true, false],
      expected: [true, true, true],
    },
  ];
  testCases.forEach((test) => {
    it(`Input: ${test.in}, expected: ${test.expected}`, () => {
      const res = arrayFilter(test.in);

      expect(res).toEqual(test.expected);
    });
  });
});
