// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../app/models/repositories/firebase-admin/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const posts = await getPosts();
      res.status(200).json(posts);
    } else {
      throw "request method is invalid.";
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
