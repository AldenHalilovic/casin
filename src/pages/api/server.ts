import type { NextApiRequest, NextApiResponse } from "next";
import { pages } from "../../api/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ message: "Error parsing JSON data" });
  }
}
