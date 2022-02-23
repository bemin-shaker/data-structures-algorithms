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

    if (this.table[id]) {
      this.table[id].push([key, value]);
    } else {
      this.table[id] = [[key, value]];
    }
  }

  get(key) {
    let id = this.hashStringToInt(key);
    return this.table[id].find((x) => x[0] === key)[1];
  }

  remove(key) {
    delete this.table[this.hashStringToInt(key)];
  }
}

const table = new HashTable();

table.set("firstName", "bob");
table.set("lastName", "tim");
console.log(table.get("firstName"));
console.log(table);
table.remove("lastName");
