// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Article from "../components/Article";

export async function createArticle({ artist, movie, results }) {
  const data = { artist, movie, results };
  const docRef = await addDoc(collection(db, "articles"), data);
  return { id: docRef.id, ...data };
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  );
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function deleteArticle(id) {
  const article = doc(db, "articles", id);
  await deleteDoc(article);
}
