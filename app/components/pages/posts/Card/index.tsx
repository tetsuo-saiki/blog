import Link from "next/link";
import { Post } from "../../../../models/entities/post";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return <Link href={`/post/${post.uid}`}>{post.title}</Link>;
};
