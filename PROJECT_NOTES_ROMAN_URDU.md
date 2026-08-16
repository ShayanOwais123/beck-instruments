# Beck Instruments Project — Roman Urdu Notes

Yeh React + Vite based e-commerce/catalog website hai. Is ka public brand name **Beck Instruments** hai. User products browse karta hai, search/filter kar sakta hai, cart mein add kar sakta hai, Firebase email/password se login kar sakta hai, aur Contact/Footer forms Firestore mein save hotay hain.

## 1. Sab se pehle: project ka mental model

```text
index.html -> src/main.jsx -> src/App.jsx -> Layout
                                      |-> Navbar
                                      |-> current route ka Page (Outlet)
                                      |-> Footer

Firebase/Firestore -> useProducts() -> Category / Search / Details / Admin
CartContext        -> Navbar count / ProductCard / Details / Cart
ThemeContext       -> Navbar / document ki .dark class / CSS variables
AuthContext        -> Login / Signup / Navbar / Admin
```

`Layout` ke andar common Navbar aur Footer sirf ek dafa render hotay hain. Beech mein `<Outlet />` us page ko lagata hai jis ka URL match hua ho.

## 2. Root aur configuration files

### `package.json`

Yeh dependencies aur commands batati file hai.

- `npm run dev`: local development server.
- `npm run build`: production build `dist/` mein banata hai.
- `npm run preview`: build ko locally preview karta hai.
- `react`, `react-router-dom`: UI aur URL routing.
- `firebase`: authentication aur Firestore database.
- `tailwindcss`: utility classes, jaise `flex`, `pt-32`, `text-white`.
- `lenis`: smooth scrolling.
- `react-icons`: `FiSearch`, `FiCart` waghera icons.
- `framer-motion` aur `react-fast-marquee` installed hain, lekin source code mein actively use nahi dikh rahe.

### `vite.config.js`

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Vite ko React JSX aur Tailwind v4 support deta hai.

### `index.html`

Browser ka initial HTML shell hai. Is mein `<div id="root"></div>` woh khaali container hai jahan React poora app mount karta hai. Title, SEO description, Open Graph tags aur Google Manrope font yahin define hain.

### `.gitignore`, `README.md`, `TODO.md`

- `.gitignore`: `node_modules`, `dist`, logs aur editor files Git mein commit nahi hotin.
- `README.md`: abhi default Vite template documentation hai; project-specific nahi.
- `TODO.md`: redesign phases ka checklist hai. Is se samajh aata hai cart, dark mode, navbar, pages etc ka redesign kiya gaya tha.
- Root mein `build_log*.txt`, `build_err.txt`, `fix-build.js`, `fix-colors.cjs` debugging/history files lagti hain; runtime app in ko import nahi karti.
- Root ki `(` aur `setSubmitted(false)` zero-byte accidental files lagti hain; source code in se linked nahi.

## 3. App start hone ka flow

### `src/main.jsx`

```jsx
function SmoothScrollApp() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, smoothWheel: true });
    return () => lenis.destroy();
  }, []);
  return <App />;
}
```

- `createRoot(...).render(...)` React app ko `#root` mein chala deta hai.
- `StrictMode` development mein unsafe patterns pakarne mein help karta hai. Development mein kuch effects do baar run hotay nazar aa sakte hain; production mein nahi.
- `useEffect(..., [])` first mount par Lenis banata hai; cleanup unmount par `destroy()` karta hai.
- `React` aur `ReactDOM` ke extra imports hain; is file mein un ki direct zarurat nahi.

### `src/App.jsx`

```jsx
<BrowserRouter>
  <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <ScrollToTop />
        <Routes>...</Routes>
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
</BrowserRouter>
```

Provider nesting ka matlab har route/component `useTheme`, `useAuth`, `useCart` use kar sakta hai. Routes:

- `/`, `/about`, `/contact`, `/categories`, `/faq`, legal pages.
- `/products` category landing page.
- `/products/:category/:slug` exact product details, e.g. `/products/surgical/mayo-scissors`.
- `/products/surgical`, `/dental`, `/veterinary`, `/beauty`, `/laboratory` category listing.
- `/cart`, `/search?q=...`, `/login`, `/signup`, `/admin`.
- `*` non-matching URL ko `NotFound` deta hai.

### `src/Layout/Layout.jsx`

```jsx
<div className="flex min-h-screen flex-col">
  <Navbar />
  <main className="flex-1"><Outlet /></main>
  <Footer />
</div>
```

`flex-1` main content ko bachi hui height deta hai aur Footer neeche rakhta hai.

## 4. Data aur Firebase

### `src/firebase.js`

Firebase web app initialize karta hai, phir `auth` aur `db` export karta hai:

```js
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

Har auth/database wali file isi shared configuration ko import karti hai. API key client config ka part hoti hai, lekin Firestore Security Rules aur Auth rules zaroor properly restrict honi chahiye.

### `src/Hooks/useProducts.js`

```js
const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
  setProducts(snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  })));
  setLoading(false);
});
return unsubscribe;
```

Yeh reusable custom hook Firestore `products` collection ko live subscribe karta hai. `onSnapshot` ka faida: admin kisi product ko add/edit/delete kare to open pages refresh ke baghair update ho sakti hain. Cleanup unsubscribe listener band karta hai.

**Important:** folder ka naam `Hooks` capital H hai, magar kuch imports `../hooks/useProducts` lower-case use karti hain. Windows par chal jata hai, lekin Linux/Vercel par case-sensitive path build fail kar sakta hai. Folder/import spelling ko consistent `Hooks` ya `hooks` rakho.

### `src/Data/Products.js`

15 hardcoded fallback/seed product objects ka array export karta hai. Har object ki common shape yeh hai:

```js
{
  id: 1, category: "surgical", slug: "mayo-scissors",
  name: "Mayo Scissors", image, shortDescription, description,
  material, finish, sizes: ["14 cm"], sku, price: 24.99,
  features: ["Rust Resistant", "Autoclavable"]
}
```

Is file ka normal product listing mein direct use nahi hai; `Admin.jsx` ka **Import existing 15 products** button ise Firestore seed karne ke liye use karta hai. Abhi bohat se image imports same `sp1.jpg` ko point karte hain. Seed ke waqt imported local image Firestore URL nahi banta, is liye image field blank ho sakti hai; admin mein public image URL enter karna hoga.

## 5. Global state (Contexts)

### `src/context/ThemeContext.jsx`

- `darkMode` initial value `localStorage("beck-theme")` se leta hai; agar na ho to system dark preference check karta hai.
- Effect HTML `<html>` element par `.dark` class add/remove karta hai aur preference save karta hai.
- `toggleDarkMode()` current boolean ulta karta hai.
- 300ms ke liye `body.theme-transition` class add hoti hai taa-ke colors smooth switch hon.

### `src/context/CartContext.jsx`

Cart browser ke `localStorage` key `beck-cart` mein persist hota hai, is liye page refresh ke baad bhi rehta hai.

```js
const existing = prev.find((item) => item.id === product.id);
if (existing) {
  return prev.map((item) => item.id === product.id
    ? { ...item, quantity: item.quantity + quantity } : item);
}
```

`addToCart` same ID dobara add karne par duplicate row nahi banata—quantity increase karta hai. Exposed functions: `removeFromCart`, `updateQuantity`, `clearCart`, `getCartTotal`, `getCartCount`, `toggleCart`, `closeCart`. `isCartOpen` state filhal set hoti hai magar visible side-cart component mein use nahi ho rahi.

### `src/context/AuthContext.jsx`

Firebase email/password auth ka wrapper:

- `signup(email,password)` -> `createUserWithEmailAndPassword`.
- `login(email,password)` -> `signInWithEmailAndPassword`.
- `logout()` -> `signOut`.
- `onAuthStateChanged` user session ko live track kar ke `currentUser` mein rakhta hai.
- Jab tak initial auth state load na ho, children render nahi hotay. Is se UI temporary incorrect login state nahi dikhata.

## 6. Shared UI components

### `src/components/Navbar.jsx`

Sab se bada reusable component. Is ki states: mobile menu, desktop Products dropdown, mobile dropdown, scroll status, search drawer/query, account menu.

```js
function handleSearchSubmit(e) {
  e.preventDefault();
  if (!searchQuery.trim()) return;
  navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  setIsSearchOpen(false);
  setSearchQuery("");
}
```

Search URL query string mein save hoti hai, phir `SearchResults` usay read karta hai. `encodeURIComponent` spaces/special characters ko URL-safe banata hai. Scroll listener `window.scrollY > 50` par top-bar hide aur glass navbar style apply karta hai. Mobile menu khulne par `document.body.style.overflow = "hidden"` page scrolling rokta hai. Navbar cart count, theme toggle aur logged-in account/admin/logout options contexts se leta hai.

### `src/components/Footer.jsx`

Newsletter form Firestore `subscribers` collection mein email plus `serverTimestamp()` save karta hai. Success/error/loading UI state rakhta hai. Is mein quick links, category links, contact info, social placeholder `#` links aur fixed scroll-to-top button hai. Footer ka `/shipping-delivery` link `App.jsx` mein route nahi rakhta; click se 404 aayega.

### `ProductCard.jsx`

Product card reusable visual unit hai. `product` aur optional `index` prop leta hai. Product detail path dynamic banta hai, two features dikhata hai, price `.toFixed(2)` se 2 decimal mein dikhata hai, aur Add buttons `addToCart(product)` chalate hain. `index * 0.1` animation delay deta hai.

### `AnimatedSection.jsx`

`IntersectionObserver` se check karta hai ke section viewport mein 10% aaya ya nahi. Aane par optional delay ke baad opacity 1 aur `translate-y-0` lagta hai. Is se scroll reveal effect banta hai.

### `ScrollToTop.jsx`

`useLocation().pathname` change ho to `window.scrollTo({top: 0, behavior: "smooth"})` chalata hai. Yeh koi HTML render nahi karta: `return null`.

### `SectionHeading.jsx`

Common heading wrapper: `subtitle`, `title`, optional `description`, `light`, `center` props. Same visual typography repeatedly likhne ki zarurat kam hoti hai.

### Home-only sections

- `Hero.jsx`: hero image, stats aur Products/Contact CTAs.
- `About.jsx` (component): company intro, image, icon highlights, About link.
- `TrustedBrands.jsx`: logos ko do baar spread karke CSS animated infinite track banata hai.
- `FeaturedCategories.jsx`: five category cards with images/links.
- `WhyChoose.jsx`: feature list + supporting image.
- `ManufacturingProcess.jsx`: Design -> Manufacturing -> Quality Inspection -> Delivery cards.
- `Certification.jsx`: ISO/CE/steel/export claims cards. Component function ka naam `Certifications` hai lekin default import kahin bhi kisi naam se ho sakta hai.
- `Testimonials.jsx`: `current` index state aur 5-second `setInterval` autoplay; Prev/Next/dot buttons manual control dete hain.
- `CTA.jsx`: final call-to-action section. Yeh JSX ke bajaye verbose `React.createElement` use karta hai, lekin output wahi React UI hai.

## 7. Pages: catalogue aur shopping

### `src/Pages/Home.jsx`

Home page sirf sections ka composition hai: Hero se CTA tak. `Navbar` aur `Footer` imports unused hain—unhein `Layout` already render karta hai.

### `src/Pages/Products/Products.jsx`

All-products landing page hai, actual product cards nahi. Local `categories` array ko `.map()` se image cards mein turn karta hai; har card category URL open karta hai.

### `src/shared/CategoryPage.jsx`

Five category pages ka central reusable engine hai. Props (`category`, title, banner, filters) category-specific wrapper file se milte hain. Yeh Firestore products la kar:

1. `product.category === category` ke zariye correct category select karta hai.
2. Name/material/finish inputs ke against case-insensitive `includes()` filter chalata hai.
3. Har filter change par page 1 reset karta hai.
4. 6 products per page paginate karta hai.

```js
const paginatedProducts = filteredProducts.slice(
  (safePage - 1) * PRODUCTS_PER_PAGE,
  safePage * PRODUCTS_PER_PAGE
);
```

`safePage` current page ko valid range mein rakhta hai. Note: category filter label name substring par dependent hai; plural mismatch (`Mirrors` vs `Dental Mirror`) ki wajah se kuch filters zero result de sakte hain. `filters` options aur real product names ko align karna behtar hai.

### Category wrapper files

`Surgical.jsx`, `Dental.jsx`, `Veterinary.jsx`, `Beauty.jsx`, `Laboratory.jsx` sab chhoti configuration files hain. In mein se har ek `CategoryPage` ko corresponding `category` string, banner image, text aur checkbox filter values deta hai. UI logic duplicate nahi ki gayi—yeh achha reusable pattern hai.

### `ProductDetails.jsx`

`useParams()` URL se category aur slug leta hai, hook ka data us match se find karta hai. Loading, not-found, normal detail states hain. Quantity `useState(1)` mein hai; minus 1 se neeche nahi jata. `handleAddToCart` selected quantity cart mein add kar ke 2 seconds ka `Added!` feedback deta hai. Neeche same category ke first four products related products hain. **Request Quote button abhi koi `onClick`/link nahi rakhta**, is liye functional action nahi karta.

### `Cart.jsx`

`useCart()` se items/functions leta hai. Empty state browse link dikhata hai. Non-empty state mein item quantity, delete, clear cart, product subtotal aur overall `getCartTotal()` render hota hai. Checkout button abhi payment/order backend se connected nahi—sirf UI button hai.

### `SearchResults.jsx`

`useSearchParams()` se `q` leta hai. Product ki `name`, category, material, finish aur short description ko ek string bana kar `includes(query)` search karta hai. Query blank ho to results empty rakhta hai. Search live Firestore data par hoti hai.

### `Categories.jsx`

Category navigation grid hai: five instrument types plus All Products. Har card `AnimatedSection` mein wrapped hai.

## 8. Pages: account, admin aur forms

### `Login.jsx` aur `Signup.jsx`

Controlled inputs hain—`value` React state se aur `onChange` state update karta hai. Login Firebase `login` call karta hai. Signup passwords matching aur minimum 6 chars manually check karta hai, phir `signup` call karta hai. Success par dono home navigate karte hain; error generic user-facing message dikhate hain.

### `Admin.jsx`

Current user na ho to UI access block karta hai. Logged-in user ke liye Firestore product CRUD interface:

```js
if (editingId) {
  await updateDoc(doc(db, "products", editingId), payload);
} else {
  await addDoc(collection(db, "products"), payload);
}
```

- Add/edit form inputs ko `form` object state mein rakhta hai.
- Edit mein existing product form mein load hota hai.
- Delete pe browser `confirm` prompt aata hai, phir `deleteDoc`.
- Seed button hardcoded 15 products import karta hai—but only jab Firestore product list empty ho.

**Security warning:** `currentUser` hona admin authority nahi hai. Abhi koi email/role allow-list nahi, is liye Firebase Firestore Rules agar weak hon to har logged-in account product manage kar sakta hai. Production mein custom claims/allowed admin UID aur strict Firestore rules chahiye.

### `Contact.jsx`

`formData` state mein name/email/subject/message rakhta hai. Submit par `messages` collection mein fields + `serverTimestamp()` save hotay hain. Success par form reset aur 3-second success state; error par error message. Map abhi placeholder hai, real Google/Mapbox map nahi.

## 9. Informational pages

- `Pages/About.jsx`: hero, stats, mission/vision, timeline, values, phir shared company sections compose karta hai.
- `FAQ.jsx`: `openIndex` state ka accordion; ek time par ek answer khulta hai.
- `PrivacyPolicy.jsx`: static privacy content, animated blocks, home backlink.
- `TermsConditions.jsx`: static terms, payment/shipping/returns/warranty content, backlink.
- `NotFound.jsx`: unmatched URL ke liye 404 UI; Home link aur browser `history.back()` button.

## 10. Styling aur assets

### `src/index.css`

`@import "tailwindcss"` Tailwind v4 enable karta hai. `:root` light-theme CSS variables aur `.dark` dark-theme versions define karta hai. Components mein `bg-[var(--bg)]`, `text-[var(--accent)]` isi system ko use karte hain. Is file mein scrollbar, selection, fade/slide/float/logo animations, `.glass`, `.logo-track`, skeleton aur ripple styles bhi hain.

### `src/App.css`

Small global reset: margin/padding/box sizing, manual smooth scroll disable, Manrope font, image responsive display, buttons cursor. Note: `index.html` Manrope load karta hai, jabke `index.css` body font `Inter` set karta hai aur `App.css` Manrope. CSS import order ki wajah se jo baad mein load ho us ka font win karega; aik font standard choose karna clearer hoga.

### `src/assets/` aur `public/`

- `assets/Hero`, `Categories`, `Surgical`, `Dental`, `Beauty`, `Veterinary`, `Laboratory`, `Brands`, `Whychoose`, `About`: imported images; Vite build mein bundle/hashed URLs banata hai.
- `public/favicon.svg`, `public/icons.svg`: root URL se directly available static files.
- `assets/react.svg`, `assets/vite.svg` aur `New Text Document.txt`: application code mein currently meaningful usage nazar nahi aati.

## 11. Data flow examples

### Product add karne ka flow

```text
Admin form -> addDoc/updateDoc Firestore(products)
           -> useProducts onSnapshot updates
           -> Category/Search/Details/Admin UI re-renders
```

### Cart flow

```text
ProductCard / ProductDetails -> addToCart(product, quantity)
  -> CartContext state update -> localStorage "beck-cart"
  -> Navbar badge + Cart page re-render
```

## 12. Aham next fixes (copy-paste project samajhne ke liye)

1. `Hooks` vs `hooks` import casing fix karo, warna Linux deployment problem ho sakta hai.
2. Firebase Firestore Security Rules set karo; Admin ke liye role/UID authorization add karo.
3. `Footer` ka `/shipping-delivery` route banao ya link hatao.
4. Product `Request Quote` aur Cart `Proceed to Checkout` ko real workflow/link se connect karo.
5. Category filter terms real names se match karao; plural/singular mismatch results hide kar sakta hai.
6. Firestore products ke image URLs, features aur sizes properly enter karo. Admin form currently new product ko `features: []`, `sizes: ["Standard"]` deta hai.
7. `Home.jsx` ke unused Navbar/Footer imports, `main.jsx` ke unused imports, aur unused installed packages cleanup kiye ja sakte hain.
8. Kuch text mein mojibake characters (`âœ…`, `Â©`, `â†’`) nazar aate hain. Files ko UTF-8 encoding mein save kar ke original symbols (✅, ©, →) replace karo.

---

## Quick glossary

- **Component:** UI ka reusable function, e.g. `ProductCard`.
- **Prop:** parent se component ko bheja gaya input, e.g. `<CategoryPage category="dental" />`.
- **State:** component ki changing memory, e.g. `useState(false)`.
- **Context:** shared global state, e.g. CartContext.
- **Hook:** React/helper function; `useProducts` custom hook hai.
- **Firestore:** Firebase ka cloud NoSQL database.
- **`useEffect`:** render ke baad side effect, e.g. listener/timer/localStorage.
- **`map`:** array ka har item UI element mein badalna.
- **`filter`:** condition match karne walay items nikalna.
- **`slug`:** URL-friendly name, e.g. `mayo-scissors`.
