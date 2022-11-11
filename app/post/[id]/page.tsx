import { publicUrl } from "../../utils/url";
import { Post } from "../../models/entities/post";
import { notFound } from "next/navigation";

type Params = {
  params: { id: string };
};

const getData = async ({ params }: Params): Promise<Post> => {
  const res = await fetch(`${publicUrl}/api/post/${params.id}`, {
    next: { revalidate: 10 },
    method: "POST",
  });
  return res.json();
};

// https://beta.nextjs.org/docs/routing/defining-routes#example
const Home = async ({ params }: Params) => {
  const post = await getData({ params });
  if (!post) notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.description}</div>
      <div>{post.content}</div>
    </div>
  );
};

export default Home;
