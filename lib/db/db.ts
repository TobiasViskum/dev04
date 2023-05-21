import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "192.168.2.20",
  database: "fitness_db",
  user: "tobias",
  password: "fitness",
  connectionLimit: 20,
});

export async function execute(q: string, val: any[]) {
  if (q == undefined || val[0] == undefined) return ["failed"];

  try {
    const [rows, fields] = (await db.execute(q, val)) as [any[], any[]];

    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
