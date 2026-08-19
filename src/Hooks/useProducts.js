import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import localProducts from "../Data/Products";

/**
 * Custom hook to load products:
 * 1. Checks Firestore live database first.
 * 2. If Firestore is empty (not seeded yet) or offline, it seamlessly falls back
 *    to the high-quality local products in `src/Data/Products.js`.
 * 3. Also merges local product rich images/galleries with Firestore docs if image is empty or local.
 */
export function useProducts() {
  const [products, setProducts] = useState(localProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = () => {};

    try {
      unsubscribe = onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          if (!snapshot.empty) {
            const items = snapshot.docs.map((docSnap) => {
              const data = docSnap.data();
              // Find matching local product to preserve rich local imported images / 3D model properties
              const match = localProducts.find(
                (p) => String(p.id) === String(docSnap.id) || p.slug === data.slug
              );

              return {
                id: docSnap.id,
                ...data,
                image: match?.image || data.image || localProducts[0].image,
                gallery: match?.gallery || data.gallery || [match?.image || data.image],
                modelType: data.modelType || match?.modelType || "scalpel",
                has3D: true,
              };
            });
            setProducts(items);
          } else {
            // Firestore is empty -> use our rich localProducts
            setProducts(localProducts);
          }
          setLoading(false);
        },
        (error) => {
          console.warn("Firestore listener notice (using local fallback products):", error);
          setProducts(localProducts);
          setLoading(false);
        }
      );
    } catch (err) {
      console.warn("Firebase not initialized, using localProducts:", err);
      setProducts(localProducts);
      setLoading(false);
    }

    return () => unsubscribe();
  }, []);

  return { products, loading };
}