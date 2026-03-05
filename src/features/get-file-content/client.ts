import { clientInstance } from "../../shared/variables";

export async function getFileContent(path: string): Promise<string> {
  const response = await clientInstance.get<string>("/content", { params: { path } });
  return response.data;
}
