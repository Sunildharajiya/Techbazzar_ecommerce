import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Default data structure
const defaultData = {
  users: [],
  products: [],
};

// Create JSON database file
const adapter = new JSONFile('database.json');
const db = new Low(adapter, defaultData);

await db.read();
db.data ||= defaultData; // If empty file, set default

await db.write();

export default db;

