import CategoryPage from "../../shared/CategoryPage";
import banner from "../../assets/Veterinary/banner.jpg";

function Veterinary() {
  return (
    <CategoryPage
      category="veterinary"
      title="Veterinary Instruments"
      collectionTitle="Veterinary Collection"
      description="Professional veterinary instruments engineered for precision, durability and reliable animal healthcare."
      banner={banner}
      filters={{
        categories: [
          "Scissors",
          "Forceps",
          "Needle Holders",
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

export default Veterinary;