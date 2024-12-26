import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true); // Enable promises for easier async handling

// Function to open the database
const getDatabaseConnection = async () => {
  try {
    const db = await SQLite.openDatabase({
      name: 'my_database.db',
      location: 'default', // Use "default" for both Android and iOS
    });
    console.log('Database connection established');
    return db;
  } catch (error) {
    console.error('Error opening database:', error);
    throw error;
  }
};

// Initialize the database with tables
export const initDatabase = async () => {
  try {
    const db = await getDatabaseConnection();
    await db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          age INTEGER NOT NULL
        );`
      );
    });
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Insert a new user
export const insertUser = async (name, age) => {
  try {
    const db = await getDatabaseConnection();
    await db.transaction((tx) => {
      tx.executeSql('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
    });
    console.log(`User ${name} inserted successfully`);
  } catch (error) {
    console.error('Error inserting user:', error);
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    const db = await getDatabaseConnection();
    const users = [];
    await db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (_, { rows }) => {
          for (let i = 0; i < rows.length; i++) {
            users.push(rows.item(i));
          }
        }
      );
    });
    console.log('Users retrieved successfully:', users);
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error);
    return [];
  }
};

// Close the database
export const closeDatabase = async () => {
  try {
    const db = await getDatabaseConnection();
    await db.close();
    console.log('Database closed successfully');
  } catch (error) {
    console.error('Error closing database:', error);
  }
};
