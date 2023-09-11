import { promises as fs } from "fs";
import { jsonDataPath } from "@/constants";

export async function getJsonData() {
  const data = await fs.readFile(jsonDataPath, "utf8");
  return JSON.parse(data);
}

export async function writeJsonData(data: {}) {
  const dataString = JSON.stringify(data, undefined, 2);
  await fs.writeFile(jsonDataPath, dataString, 'utf8');
}
