import { execute } from ".";

export async function getAppData() {
  const q = "SELECT * FROM app_data";

  const appData = await execute(q, [""]);

  return appData;
}
