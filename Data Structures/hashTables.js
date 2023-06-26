class HashTable {
  constructor() {
    this.table = new Array(100);
  }

  //Hash function to spread out the keys in the table
  hashStringToInt(s) {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
      hash = (hash * s.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    let id = this.hashStringToInt(key);
    this.table[id] = value;
  }

  get(key) {
    return this.table[this.hashStringToInt(key)];
  }

  remove(key) {
    delete this.table[this.hashStringToInt(key)];
  }
}

class ChainingHashTable {
  constructor() {
    this.table = new Array(100);
  }

  //Hash function to spread out the keys in the table
  hashStringToInt(s) {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
      hash = (hash * s.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    let id = this.hashStringToInt(key);

    if (this.table[id] === undefined) {
      this.table[id] = [];
    }

    return this.table[id].push([key, value]);
  }

  get(key) {
    let id = this.hashStringToInt(key);
    return this.table[id].find((x) => x[0] === key)[1];
  }

  remove(key) {
    delete this.table[this.hashStringToInt(key)];
  }
}

class LinearProbingHashTable {
  constructor() {
    this.table = new Array(100);
  }

  //Hash function to spread out the keys in the table
  hashStringToInt(s) {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
      hash = (hash * s.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    let id = this.hashStringToInt(key);

    //Looks for next available index to insert the hash value
    if (this.table[id] === undefined) {
      this.table[id] = [key, value];
    } else {
      while (this.table[id] !== undefined) {
        id++;
      }
    }

    return (this.table[id] = [key, value]);
  }

  get(key) {
    let id = this.hashStringToInt(key);

    while (this.table[id] !== undefined) {
      if (this.table[id][0] === key) {
        return this.table[id][1];
      }
      id++;
    }

    return undefined;
  }
}

//const table = new HashTable();
const table = new ChainingHashTable();

table.set("firstName", "bob");
table.set("lastName", "tim");

console.log(table);

//JavaScript Built-in Map data structure
// const items = new Map([
//   [1, { firstName: "John" }],
//   [2, { lastName: "Mary" }],
// ]);

//console.log(items);
