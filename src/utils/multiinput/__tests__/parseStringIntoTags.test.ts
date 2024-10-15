import { parseStringIntoTags } from 'src/utils/multiinput/parseStringIntoTags';

describe('parseStringIntoTags', () => {
  test('Single tag', () => {
    const str = 'test';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['test']);
  });

  test('Multiple tags with comma delimiter', () => {
    const str = 'tag1,tag2,tag3';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('Multiple tags with pipe delimiter', () => {
    const str = 'tag1|tag2|tag3';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('Multiple tags with mixed delimiters', () => {
    const str = 'tag1,tag2|tag3';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('Empty string', () => {
    const str = '';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual([]);
  });

  test('String with only delimiters', () => {
    const str = ',|,|';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual([]);
  });

  test('String with leading and trailing delimiters', () => {
    const str = ',tag1,tag2,';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2']);
  });

  test('String with spaces around delimiters', () => {
    const str = 'tag1, tag2 | tag3 tag4';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3', 'tag4']);
  });

  test('String with consecutive delimiters', () => {
    const str = 'tag1,,tag2||tag3';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('String with spaces as delimiter', () => {
    const str = 'tag1 tag2 tag3';
    const tags = parseStringIntoTags(str);

    expect(tags).toEqual(['tag1', 'tag2', 'tag3']);
  });
});
