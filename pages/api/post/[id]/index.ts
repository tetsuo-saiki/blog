// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "../../../../app/models/repositories/firebase-admin/post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") throw "request method is invalid.";

    // https://nextjs.org/docs/api-routes/dynamic-api-routes
    const { id } = req.query;
    if (!id) throw "request srug is invalid.";

    const post = await getPost(id as string);
    if (!post) return res.status(404).json(null);

    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
