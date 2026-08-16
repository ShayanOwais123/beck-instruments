import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

// This hook keeps "products" in sync with the Firestore "products" collection.
// onSnapshot means it updates live -- if you add/edit/delete a product in the
// Admin page, every open tab/page sees the change immediately, no refresh needed.
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const items = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        }));
        setProducts(items);
        setLoading(false);
      },
      (error) => {
        console.error("Failed to load products:", error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return { products, loading };
}