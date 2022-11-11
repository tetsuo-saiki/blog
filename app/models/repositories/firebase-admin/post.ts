import { admin } from "../../../utils/firebase-admin";
import { FirestoreDataConverter } from "@google-cloud/firestore";
import { Post } from "../../entities/post";

const postConverter: FirestoreDataConverter<Post> = {
  toFirestore(post: Post): FirebaseFirestore.DocumentData {
    return post;
  },
  fromFirestore(snapshot: FirebaseFirestore.QueryDocumentSnapshot): Post {
    const data = snapshot.data();
    return {
      uid: snapshot.id,
      title: data.title,
      description: data.description,
      image: data.image,
      content: data.content,
      createdAt: data.createdAt.toDate(),
      updatedAt: data.createdAt.toDate(),
    };
  },
};

export const getPosts = async (): Promise<Post[]> => {
  const snapshot = await admin
    .firestore()
    .collection("posts")
    .withConverter(postConverter)
    .get();

  return snapshot.docs.map((doc) => doc.data());
};

export const getPost = async (id: string): Promise<Post | undefined> => {
  const doc = await admin
    .firestore()
    .collection("posts")
    .withConverter(postConverter)
    .doc(id)
    .get();
  if (!doc.exists) return;

  return doc.data();
};
