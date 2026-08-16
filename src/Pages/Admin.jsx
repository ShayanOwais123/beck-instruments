import { useState } from "react";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../hooks/useProducts";
import localProducts from "../Data/Products";
import { FiTrash2, FiEdit2, FiPlus, FiUpload, FiX, FiLock } from "react-icons/fi";

// Only this email is allowed to manage products. Change this if you ever
// switch to a different account.
const ADMIN_EMAIL = "shayanowais27@gmail.com";

const emptyForm = {
  name: "",
  category: "surgical",
  slug: "",
  price: "",
  material: "",
  finish: "",
  shortDescription: "",
  description: "",
  image: "",
  sku: "",
};

function Admin() {
  const { currentUser } = useAuth();
  const { products, loading } = useProducts();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [seeding, setSeeding] = useState(false);
  const [saving, setSaving] = useState(false);

  // Not logged in at all -> block access
  if (!currentUser) {
    return (
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24 flex items-center justify-center px-6">
        <div className="text-center">
          <FiLock size={40} className="mx-auto text-[var(--accent)]" />
          <h1 className="mt-4 text-2xl font-bold text-[var(--text)]">Admin Access Only</h1>
          <p className="mt-2 text-[var(--text-secondary)]">Please log in to manage products.</p>
        </div>
      </main>
    );
  }

  // Logged in, but not the admin account -> block access too
  if (currentUser.email !== ADMIN_EMAIL) {
    return (
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24 flex items-center justify-center px-6">
        <div className="text-center">
          <FiLock size={40} className="mx-auto text-red-500" />
          <h1 className="mt-4 text-2xl font-bold text-[var(--text)]">Access Denied</h1>
          <p className="mt-2 text-[var(--text-secondary)]">
            This account doesn't have permission to manage products.
          </p>
        </div>
      </main>
    );
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function startEdit(product) {
    setEditingId(product.id);
    setForm({
      name: product.name || "",
      category: product.category || "surgical",
      slug: product.slug || "",
      price: product.price ?? "",
      material: product.material || "",
      finish: product.finish || "",
      shortDescription: product.shortDescription || "",
      description: product.description || "",
      image: product.image || "",
      sku: product.sku || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        price: parseFloat(form.price) || 0,
        features: [],
        sizes: ["Standard"],
      };

      if (editingId) {
        await updateDoc(doc(db, "products", editingId), payload);
      } else {
        await addDoc(collection(db, "products"), payload);
      }
      cancelEdit();
    } catch (err) {
      console.error(err);
      alert("Failed to save product. Check the console for details.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    try {
      await deleteDoc(doc(db, "products", id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    }
  }

  // One-click migration: copies the 15 hardcoded products from Data/Products.js
  // into Firestore, using the same numeric id as the document id (so running
  // this twice just overwrites the same 15 docs instead of duplicating them).
  async function handleSeed() {
    setSeeding(true);
    try {
      for (const product of localProducts) {
        const { id, image, ...rest } = product;
        await setDoc(doc(db, "products", String(id)), {
          ...rest,
          image: typeof image === "string" ? image : "",
        });
      }
      alert("Seeded! Note: local image imports don't carry over as URLs -- add an image URL per product below once you have real photos.");
    } catch (err) {
      console.error(err);
      alert("Seeding failed. Check the console for details.");
    } finally {
      setSeeding(false);
    }
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[var(--text)]">Product Admin</h1>
            <p className="mt-2 text-[var(--text-secondary)]">
              Logged in as {currentUser.email}
            </p>
          </div>
          {products.length === 0 && !loading && (
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              <FiUpload size={16} />
              {seeding ? "Importing..." : "Import existing 15 products"}
            </button>
          )}
        </div>

        {/* Add / Edit form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 lg:p-8 shadow-sm mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text)]">
              {editingId ? "Edit Product" : "Add New Product"}
            </h2>
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="flex items-center gap-1 text-sm font-semibold text-[var(--text-secondary)] hover:text-red-500"
              >
                <FiX size={14} /> Cancel edit
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Product Name" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <select name="category" value={form.category} onChange={handleChange} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]">
              <option value="surgical">Surgical</option>
              <option value="dental">Dental</option>
              <option value="veterinary">Veterinary</option>
              <option value="beauty">Beauty</option>
              <option value="laboratory">Laboratory</option>
            </select>
            <input name="slug" value={form.slug} onChange={handleChange} required placeholder="url-slug-like-this" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <input name="price" value={form.price} onChange={handleChange} required type="number" step="0.01" placeholder="Price (e.g. 24.99)" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <input name="material" value={form.material} onChange={handleChange} placeholder="Material" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <input name="finish" value={form.finish} onChange={handleChange} placeholder="Finish" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <input name="sku" value={form.sku} onChange={handleChange} placeholder="SKU" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
            <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
          </div>
          <input name="shortDescription" value={form.shortDescription} onChange={handleChange} placeholder="Short description (shown on product card)" className="mt-5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)]" />
          <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Full description" className="mt-5 w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] resize-none" />

          <button
            type="submit"
            disabled={saving}
            className="mt-6 flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white disabled:opacity-50"
          >
            <FiPlus size={16} />
            {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Product list */}
        <h2 className="text-xl font-bold text-[var(--text)] mb-6">
          All Products {!loading && `(${products.length})`}
        </h2>

        {loading ? (
          <p className="text-[var(--text-secondary)]">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-[var(--text-secondary)]">
            No products yet. Click "Import existing 15 products" above, or add one manually.
          </p>
        ) : (
          <div className="space-y-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold text-[var(--text)] truncate">{product.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {product.category} · ${Number(product.price || 0).toFixed(2)} · {product.sku}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => startEdit(product)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)]"
                  >
                    <FiEdit2 size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:bg-red-50 hover:text-red-500"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Admin;