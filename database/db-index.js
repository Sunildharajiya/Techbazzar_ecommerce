import db from './db.js';

// CREATE
async function createUser(name, email) {
  await db.read();
  db.data.users.push({
    id: Date.now(),
    name,
    email
  });
  await db.write();
  console.log("User added!");
}

// READ
async function getUsers() {
  await db.read();
  console.log(db.data.users);
}

// UPDATE
async function updateUser(id, updates) {
  await db.read();
  const user = db.data.users.find(u => u.id === id);
  if (!user) return console.log("User not found!");

  Object.assign(user, updates);
  await db.write();
  console.log("User updated!");
}

// DELETE
async function deleteUser(id) {
  await db.read();
  db.data.users = db.data.users.filter(u => u.id !== id);
  await db.write();
  console.log("User deleted!");
}


// --- DEMO ---
await deleteUser();
await getUsers();

