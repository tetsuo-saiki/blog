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
