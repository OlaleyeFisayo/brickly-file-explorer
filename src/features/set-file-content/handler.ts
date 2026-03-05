import type { RequestHandler } from "express";

import z from "zod/v4";

import { setFileContent } from "./logic";

const setFileContentSchema = z.object({
  path: z.string(),
  content: z.string(),
});

export const setFileContentHandler: RequestHandler = async (req, res) => {
  const result = setFileContentSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json(z.flattenError(result.error));
    return;
  }

  const {
    path,
    content,
  } = result.data;
  try {
    await setFileContent(path, content);
    res.json({ message: "File Content Updated Successfully" });
  }
  catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
