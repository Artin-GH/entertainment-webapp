import { NextResponse } from "next/server";
import { getJsonData } from "@/jsonData";
import { promises as fs } from "fs";
import { jsonDataPath } from "@/constants";
import { revalidatePath } from "next/cache";

export async function PATCH(request: Request) {
  const data = await request.json();
  if (data["id"] === undefined)
    return NextResponse.json({ ok: false, message: "ID not found" });

  const items: Array<any> = await getJsonData();
  const itemKeyes = Object.keys(items[0]);
  let item: any = null;
  for (const currentItem of items) {
    if (currentItem.id == data.id) {
      item = currentItem;
      delete data.id;
      Object.keys(data).forEach((key) => {
        if (itemKeyes.findIndex((val) => val === key) === -1)
          NextResponse.json({ ok: false, message: "Key not found" });
        currentItem[key] = data[key];
      });
      break;
    }
  }

  await fs.writeFile(jsonDataPath, JSON.stringify(items, undefined, 2));
  return NextResponse.json({ ok: true, item });
}
