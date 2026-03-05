import { clientInstance } from "../../shared/variables";

export async function setFileContent(path: string, content: string): Promise<void> {
  await clientInstance.post("/content", {
    path,
    content,
  });
}
