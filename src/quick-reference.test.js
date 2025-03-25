const { Trie, binarySearch, searchQuickReference } = require('./quick-reference');

describe('Quick Reference Search', () => {
  test('searching for "back" locates the "Match Subpattern #" page', () => {
    const results = searchQuickReference('back');
    expect(results).toEqual([
      { term: 'Match Subpattern #', description: 'Matches the subpattern and remembers the match.' }
    ]);
  });

  test('Trie data structure implementation', () => {
    const trie = new Trie();
    trie.insert('hello');
    trie.insert('world');

    expect(trie.search('hello')).toBe(true);
    expect(trie.search('world')).toBe(true);
    expect(trie.search('hell')).toBe(false);
    expect(trie.startsWith('hell')).toBe(true);
    expect(trie.startsWith('worl')).toBe(true);
    expect(trie.startsWith('worx')).toBe(false);
  });

  test('Binary search algorithm implementation', () => {
    const sortedArray = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
    expect(binarySearch(sortedArray, 'cherry')).toBe(2);
    expect(binarySearch(sortedArray, 'apple')).toBe(0);
    expect(binarySearch(sortedArray, 'grape')).toBe(5);
    expect(binarySearch(sortedArray, 'kiwi')).toBe(-1);
  });
});
