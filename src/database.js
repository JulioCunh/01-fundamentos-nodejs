export class Database {
  #database = {};

  select(table) {
    const data = this.#database[table] ?? [];

    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.data)[table]) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    return data;
  }
}
