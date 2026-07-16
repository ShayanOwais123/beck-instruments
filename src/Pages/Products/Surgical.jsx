import CategoryPage from "../../shared/CategoryPage";
import banner from "../../assets/Surgical/banner.jpg";

function Surgical() {
  return (
    <CategoryPage
      category="surgical"
      title="Surgical Instruments"
      collectionTitle="Surgical Collection"
      description="Explore our premium range of precision-crafted surgical instruments trusted by hospitals, clinics and healthcare professionals worldwide."
      banner={banner}
      filters={{
        categories: [
          "Scissors",
          "Forceps",
          "Needle Holder",
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

export default Surgical;