const sum = require('./sum')

//test 1 + 2 = 3
//what you want to test text, function to call to run test
test('properly adds two numbers togther', () => {
  //jest functions
  expect(sum(1, 2)).toBe(3)
})
