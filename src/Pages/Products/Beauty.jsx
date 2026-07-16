import CategoryPage from "../../shared/CategoryPage";
import banner from "../../assets/Beauty/banner.jpg";

function Beauty() {
  return (
    <CategoryPage
      category="beauty"
      title="Beauty Instruments"
      collectionTitle="Beauty Collection"
      description="Premium beauty and grooming instruments crafted for salons, professionals and personal care."
      banner={banner}
      filters={{
        categories: [
          "Tweezers",
          "Cuticle Scissors",
          "Nail Nippers",
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

export default Beauty;