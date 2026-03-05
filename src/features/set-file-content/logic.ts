import {
  lstat,
  writeFile,
} from "node:fs/promises";

export async function setFileContent(filePath: string, content: string): Promise<void> {
  let stats;
  try {
    stats = await lstat(filePath);
  }
  catch (error: any) {
    if (error.code === "ENOENT") {
      throw new Error(`File does not exist: ${filePath}`);
    }
    throw error;
  }

  if (stats.isDirectory()) {
    throw new Error(`Path is a directory, not a file: ${filePath}`);
  }

  try {
    await writeFile(filePath, content, { encoding: "utf-8" });
  }
  catch (error: any) {
    throw new Error(`Failed to write file ${filePath}: ${error.message}`, { cause: error });
  }
}
