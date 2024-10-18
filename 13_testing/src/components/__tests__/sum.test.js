import { sum } from "../sum";

// we write a test function, which takes 2 arguments. 1st is a string with description of the tesetcase, & 2nd is callback function having the actual testcases
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
