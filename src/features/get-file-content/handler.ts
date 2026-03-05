import type { RequestHandler } from "express";

import z from "zod/v4";

import { getFileContent } from "./logic";

const getFileContentSchema = z.object({ path: z.string() });

export const getFileContentHandler: RequestHandler = async (req, res) => {
  const result = getFileContentSchema.safeParse(req.query);

  if (!result.success) {
    res.status(400).json(z.flattenError(result.error));
    return;
  }

  const { path } = result.data;
  try {
    const content = await getFileContent(path);
    res.json(content);
  }
  catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
