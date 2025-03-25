class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const quickReference = [
  { term: 'Match Subpattern #', description: 'Matches the subpattern and remembers the match.' },
  // other terms...
];

const trie = new Trie();
quickReference.forEach(item => trie.insert(item.term.toLowerCase()));
trie.insert('backreference');

function searchQuickReference(term) {
  const lowerTerm = term.toLowerCase();
  if (trie.search(lowerTerm) || trie.startsWith(lowerTerm)) {
    return quickReference.filter(item => item.term.toLowerCase().includes(lowerTerm));
  }

  const sortedTerms = quickReference.map(item => item.term).sort();
  const index = binarySearch(sortedTerms, term);
  if (index !== -1) {
    return [quickReference[index]];
  }

  return [];
}
