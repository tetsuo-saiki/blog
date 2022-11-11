import Link from "next/link";
import Image from "next/image";
import { Post } from "../../../../models/entities/post";
import { formatDate } from "../../../../utils/moment";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.uid}`}>
      <div className="h-full w-full rounded-lg border">
        {post.image ? (
          <Image src={post.image} width={384} height={256} alt={post.title} />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            no image
          </div>
        )}
      </div>
      <div className="px-2 py-4">
        <h1 className="text-lg font-bold">{post.title}</h1>
        <span>{formatDate(post.updatedAt, "YYYY-MM-DD")}</span>
      </div>
    </Link>
  );
};
