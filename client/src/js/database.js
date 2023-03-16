import { openDB } from 'idb';

const DB_NAME = 'jate';

const initdb = async () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log(`${DB_NAME} database already exists`);
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
      console.log(`${DB_NAME} database created`);
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB(DB_NAME, 1);
  const tx = jateDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  const request = store.put({ value: content, id: 1 });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB(DB_NAME, 1);
  const tx = jateDb.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);
  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);
  //return result;
}

initdb();
