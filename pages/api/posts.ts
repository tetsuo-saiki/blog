// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../../app/models/entities/post";
import { getPosts } from "../../app/models/repositories/firebase-admin/post";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = await getPosts();
  res.status(200).json(posts);
}
