import { publicUrl } from "./utils/url";
import { Post } from "./models/entities/post";
import { PostCard } from "./components/pages/posts/Card";

const getData = async (): Promise<Post[]> => {
  // https://nextjs.org/blog/next-13
  // This request should be cached with a lifetime of 10 seconds.
  // Similar to `getStaticProps` with the `revalidate` option.
  const res = await fetch(`${publicUrl}/api/posts`, {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
};

const Home = async () => {
  const posts = await getData();

  return (
    <div className="my-8">
      {posts.map((post) => (
        <PostCard key={post.uid} post={post} />
      ))}
    </div>
  );
};

export default Home;
