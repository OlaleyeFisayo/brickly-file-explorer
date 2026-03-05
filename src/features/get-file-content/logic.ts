import {
  lstat,
  readFile,
} from "node:fs/promises";

export async function getFileContent(filePath: string): Promise<string> {
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
    return await readFile(filePath, "utf-8");
  }
  catch (error: any) {
    throw new Error(`Failed to read file ${filePath}: ${error.message}`, { cause: error });
  }
}
