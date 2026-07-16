import CategoryPage from "../../shared/CategoryPage";
import banner from "../../assets/Laboratory/banner.jpg";

function Laboratory() {
  return (
    <CategoryPage
      category="laboratory"
      title="Laboratory Instruments"
      collectionTitle="Laboratory Collection"
      description="High-quality laboratory instruments designed for precision, testing and scientific research."
      banner={banner}
      filters={{
        categories: [
          "Tweezers",
          "Spatulas",
          "Laboratory Forceps",
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

export default Laboratory;