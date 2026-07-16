import CategoryPage from "../../shared/CategoryPage";
import banner from "../../assets/Dental/banner.jpg";

function Dental() {
  return (
    <CategoryPage
      category="dental"
      title="Dental Instruments"
      collectionTitle="Dental Collection"
      description="Discover high-quality dental instruments designed for precision, durability and everyday clinical practice."
      banner={banner}
      filters={{
        categories: [
          "Mirrors",
          "Explorers",
          "Extraction Forceps",
        ],
        materials: [
          "German Steel",
          "Stainless Steel",
        ],
        finishes: [
          "Mirror Finish",
          "Satin Finish",
        ],
      }}
    />
  );
}

export default Dental;