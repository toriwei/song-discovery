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

export async function createArticle({ artist, movie, data }) {
  const payload = { artist, movie, date: Timestamp.now(), data };
  console.log("WRITING TO DB", payload)
  const docRef = await addDoc(collection(db, "articles"), payload);
  console.log("WROTE IT")
  return { id: docRef.id, ...payload };
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
