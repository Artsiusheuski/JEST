const reverse = require("./test/my_testing");

describe("My describe", () => {
  const my_test = [
    {
      inString: "Hello",
      expected: "olleH",
    },
    {
      inString: "llo",
      expected: "oll",
    },
    {
      inString: "He",
      expected: "eH",
    },
  ];
  my_test.forEach((test) => {
    it(`Input string: ${test.inString} expected string: ${test.expected}`, () => {
      const res = reverse(test.inString);
      expect(res).toBe(test.expected);
    });
  });
});
