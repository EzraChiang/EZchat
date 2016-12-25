var expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  var test = 1234;
  var spaces = '   ';
  var passing = '  hello  '

  it('should reject non-string values', () => {
    expect(isRealString(test)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString(spaces)).toBe(false);
  });

  it('should allow string with non space characters', () => {
    expect(isRealString(passing)).toBe(true);
  });

});
