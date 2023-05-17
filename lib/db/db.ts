import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "192.168.2.20",
    user: "tobias",
    password: "fitness",
    database: "fitness_db",
  },
});

export async function execute<T>(q: string, val: any[]): Promise<T[]> {
  try {
    const result = (await db.query(q, val)) as T[];
    await db.end();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
