var expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

  var test = 1234;
  var spaces = '   ';
  var passing = '  hello  '

  it('should reject non-string values', (done) => {
    expect(isRealString(test)).toBe(false);
    done();
  });

  it('should reject string with only spaces', (done) => {
    expect(isRealString(spaces)).toBe(false);
    done();
  });

  it('should allow string with non space characters', (done) => {
    expect(isRealString(passing)).toBe(true);
    done();
  });

});
