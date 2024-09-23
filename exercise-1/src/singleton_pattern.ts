// Creational Design Pattern

class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {
    this.connect();
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  private connect(): void {
    console.log('Connecting to the database...');
  }

  query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

// Usage
const conn1 = DatabaseConnection.getInstance();
const conn2 = DatabaseConnection.getInstance();

console.log(conn1 === conn2); // true

conn1.query('SELECT * FROM users');
conn2.query("INSERT INTO users (name) VALUES ('John')");
