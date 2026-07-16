// ================= SURGICAL IMAGES =================

import mayoScissors from "../assets/Surgical/sp1.jpg";
import arteryForceps from "../assets/Surgical/sp1.jpg";
import needleHolder from "../assets/Surgical/sp1.jpg";
import tissueForceps from "../assets/Surgical/sp1.jpg";
import scalpelHandle from "../assets/Surgical/sp1.jpg";
import dressingScissors from "../assets/Surgical/sp1.jpg";

// ================= DENTAL IMAGES =================

import dentalMirror from "../assets/Surgical/sp1.jpg";
import explorer from "../assets/Surgical/sp1.jpg";
import extractionForceps from "../assets/Surgical/sp1.jpg";

// ================= VETERINARY IMAGES =================

import vetScissors from "../assets/Surgical/sp1.jpg";
import vetForceps from "../assets/Surgical/sp1.jpg";

// ================= BEAUTY IMAGES =================

import cuticleNipper from "../assets/Surgical/sp1.jpg";
import beautyTweezers from "../assets/Surgical/sp1.jpg";

// ================= LAB IMAGES =================

import labSpatula from "../assets/Surgical/sp1.jpg";
import labForceps from "../assets/Surgical/sp1.jpg";

const products = [

  // ================= SURGICAL =================

  {
    id: 1,
    category: "surgical",
    slug: "mayo-scissors",
    name: "Mayo Scissors",
    image: mayoScissors,
    shortDescription: "Premium stainless steel surgical scissors.",
    description:
      "Designed for cutting heavy tissues with exceptional precision and durability.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["14 cm", "16 cm", "18 cm"],
    sku: "BK-001",
    features: [
      "German Stainless Steel",
      "Rust Resistant",
      "Autoclavable",
      "CE Certified",
    ],
  },

  {
    id: 2,
    category: "surgical",
    slug: "artery-forceps",
    name: "Artery Forceps",
    image: arteryForceps,
    shortDescription: "Reliable artery forceps for surgical procedures.",
    description:
      "Manufactured for secure clamping with excellent grip and durability.",
    material: "German Stainless Steel",
    finish: "Satin Finish",
    sizes: ["12 cm", "14 cm", "16 cm"],
    sku: "BK-002",
    features: [
      "German Stainless Steel",
      "Secure Grip",
      "Rust Resistant",
      "Reusable",
    ],
  },

  {
    id: 3,
    category: "surgical",
    slug: "needle-holder",
    name: "Needle Holder",
    image: needleHolder,
    shortDescription: "Precision needle holder.",
    description:
      "Designed for accurate needle control during suturing procedures.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["14 cm", "16 cm", "18 cm"],
    sku: "BK-003",
    features: [
      "Fine Grip",
      "German Steel",
      "Autoclavable",
      "Professional Grade",
    ],
  },

  {
    id: 4,
    category: "surgical",
    slug: "tissue-forceps",
    name: "Tissue Forceps",
    image: tissueForceps,
    shortDescription: "High-quality tissue handling forceps.",
    description:
      "Provides excellent grip while minimizing tissue trauma.",
    material: "German Stainless Steel",
    finish: "Satin Finish",
    sizes: ["12 cm", "14 cm"],
    sku: "BK-004",
    features: [
      "Precision Tips",
      "German Steel",
      "Reusable",
      "Corrosion Resistant",
    ],
  },

  {
    id: 5,
    category: "surgical",
    slug: "scalpel-handle",
    name: "Scalpel Handle",
    image: scalpelHandle,
    shortDescription: "Reusable surgical scalpel handle.",
    description:
      "Compatible with standard surgical blades for precision cutting.",
    material: "German Stainless Steel",
    finish: "Matte Finish",
    sizes: ["No. 3", "No. 4"],
    sku: "BK-005",
    features: [
      "Medical Grade",
      "Non-Slip Grip",
      "Reusable",
      "Autoclavable",
    ],
  },

  {
    id: 6,
    category: "surgical",
    slug: "dressing-scissors",
    name: "Dressing Scissors",
    image: dressingScissors,
    shortDescription: "Professional dressing scissors.",
    description:
      "Designed for safe cutting of dressings and bandages.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["14 cm", "16 cm"],
    sku: "BK-006",
    features: [
      "Rounded Tips",
      "Rust Resistant",
      "Premium Steel",
      "Reusable",
    ],
  },

  // ================= DENTAL =================

  {
    id: 7,
    category: "dental",
    slug: "dental-mirror",
    name: "Dental Mirror",
    image: dentalMirror,
    shortDescription: "Professional dental examination mirror.",
    description:
      "Provides excellent visibility during dental procedures.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["Standard"],
    sku: "BK-007",
    features: [
      "Fog Resistant",
      "Premium Steel",
      "Reusable",
      "High Visibility",
    ],
  },

  {
    id: 8,
    category: "dental",
    slug: "explorer",
    name: "Dental Explorer",
    image: explorer,
    shortDescription: "Diagnostic dental explorer.",
    description:
      "Used for caries detection and oral examination.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["Standard"],
    sku: "BK-008",
    features: [
      "Fine Tip",
      "Diagnostic Tool",
      "Rust Resistant",
      "Professional Grade",
    ],
  },
    {
    id: 9,
    category: "dental",
    slug: "extraction-forceps",
    name: "Extraction Forceps",
    image: extractionForceps,
    shortDescription: "Professional extraction forceps.",
    description:
      "Provides a firm grip during tooth extraction procedures.",
    material: "German Stainless Steel",
    finish: "Satin Finish",
    sizes: ["Adult", "Child"],
    sku: "BK-009",
    features: [
      "Strong Grip",
      "German Steel",
      "Rust Resistant",
      "Professional Grade",
    ],
  },

  // ================= VETERINARY =================

  {
    id: 10,
    category: "veterinary",
    slug: "vet-scissors",
    name: "Veterinary Scissors",
    image: vetScissors,
    shortDescription: "Precision veterinary scissors.",
    description:
      "Designed for animal surgical applications.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["14 cm", "16 cm"],
    sku: "BK-010",
    features: [
      "Veterinary Grade",
      "Autoclavable",
      "Rust Resistant",
      "Premium Steel",
    ],
  },

  {
    id: 11,
    category: "veterinary",
    slug: "vet-forceps",
    name: "Veterinary Forceps",
    image: vetForceps,
    shortDescription: "Veterinary tissue forceps.",
    description:
      "Reliable forceps for veterinary surgical procedures.",
    material: "German Stainless Steel",
    finish: "Satin Finish",
    sizes: ["14 cm"],
    sku: "BK-011",
    features: [
      "Fine Grip",
      "Reusable",
      "Premium Steel",
      "Corrosion Resistant",
    ],
  },

  // ================= BEAUTY =================

  {
    id: 12,
    category: "beauty",
    slug: "cuticle-nipper",
    name: "Cuticle Nipper",
    image: cuticleNipper,
    shortDescription: "Professional cuticle nipper.",
    description:
      "Sharp blades for clean and precise manicure work.",
    material: "German Stainless Steel",
    finish: "Mirror Finish",
    sizes: ["Standard"],
    sku: "BK-012",
    features: [
      "Sharp Cutting Edge",
      "Professional Quality",
      "Rust Resistant",
      "Ergonomic Design",
    ],
  },

  {
    id: 13,
    category: "beauty",
    slug: "beauty-tweezers",
    name: "Beauty Tweezers",
    image: beautyTweezers,
    shortDescription: "Precision beauty tweezers.",
    description:
      "Perfect for eyebrow shaping and cosmetic use.",
    material: "German Stainless Steel",
    finish: "Matte Finish",
    sizes: ["Standard"],
    sku: "BK-013",
    features: [
      "Precision Tip",
      "Comfort Grip",
      "Premium Steel",
      "Professional Finish",
    ],
  },

  // ================= LAB =================

  {
    id: 14,
    category: "laboratory",
    slug: "lab-spatula",
    name: "Laboratory Spatula",
    image: labSpatula,
    shortDescription: "Laboratory mixing spatula.",
    description:
      "Ideal for handling powders and chemicals.",
    material: "Stainless Steel",
    finish: "Polished",
    sizes: ["Standard"],
    sku: "BK-014",
    features: [
      "Chemical Resistant",
      "Laboratory Grade",
      "Durable",
      "Easy to Clean",
    ],
  },

  {
    id: 15,
    category: "laboratory",
    slug: "lab-forceps",
    name: "Laboratory Forceps",
    image: labForceps,
    shortDescription: "Precision laboratory forceps.",
    description:
      "Designed for accurate sample handling.",
    material: "Stainless Steel",
    finish: "Polished",
    sizes: ["Standard"],
    sku: "BK-015",
    features: [
      "Precision Grip",
      "Laboratory Grade",
      "Rust Resistant",
      "High Durability",
    ],
  },

];

export default products;