const randomInt = require("./test/my_rundom");

describe("Rundom figure", () => {
  const testCases = [
    {
      from: 100,
      to: 110,
    },
    {
      from: 200,
      to: 201,
    },
  ];
  testCases.forEach((test) => {
    it(`from: ${test.from}  to:${test.to}    `, () => {
      const res = randomInt(test.from, test.to);
      expect(res).toBeGreaterThanOrEqual(test.from);
      expect(res).toBeLessThanOrEqual(test.to);
      //exemple
    });
  });
});
