// ================= SURGICAL IMAGES =================
import mayoScissorsImg from "../assets/Surgical/mayo_scissors_3d_1786987261802.jpg";
import arteryForcepsImg from "../assets/Surgical/artery_forceps_3d_1786987294163.jpg";
import needleHolderImg from "../assets/Surgical/needle_holder_3d_1786987325635.jpg";
import tissueForcepsImg from "../assets/Surgical/tissue_forceps_3d_1786987366999.jpg";
import scalpelHandleImg from "../assets/Surgical/scalpel_handle_3d_1786987406482.jpg";
import dressingScissorsImg from "../assets/Surgical/sp1.jpg";

// Multi-angle detail thumbnails
import sp2 from "../assets/Surgical/sp2.jpg";
import sp3 from "../assets/Surgical/sp3.jpg";
import sp4 from "../assets/Surgical/sp4.jpg";
import sp5 from "../assets/Surgical/sp5.jpg";
import sp6 from "../assets/Surgical/sp6.jpg";
import surgicalBanner from "../assets/Surgical/banner.jpg";

// ================= DENTAL IMAGES =================
import dentalMirrorImg from "../assets/Surgical/dental_mirror_3d_1786987446469.jpg";
import dentalExplorerImg from "../assets/Dental/dental_explorer.jpg";
import dentalExtractionImg from "../assets/Dental/extraction_forceps.jpg";
import dentalBanner from "../assets/Dental/banner.jpg";
import dentalCategoryImg from "../assets/Categories/dental.jpg";

// ================= VETERINARY IMAGES =================
import vetScissorsImg from "../assets/Veterinary/vet_scissors.jpg";
import vetAllisForcepsImg from "../assets/Veterinary/vet_allis_forceps.jpg";
import veterinaryCategoryImg from "../assets/Categories/veterinary.jpg";
import veterinaryBanner from "../assets/Veterinary/banner.jpg";

// ================= BEAUTY IMAGES =================
import cuticleNipperImg from "../assets/Beauty/cuticle_nipper.jpg";
import beautyTweezersImg from "../assets/Beauty/beauty_tweezers.jpg";
import beautyBanner from "../assets/Beauty/banner.jpg";
import beautyCategoryImg from "../assets/Categories/beauty.jpg";

// ================= LAB IMAGES =================
import labSpatulaImg from "../assets/Laboratory/lab_spatula.jpg";
import labForcepsImg from "../assets/Laboratory/lab_forceps.jpg";
import labCategoryImg from "../assets/Categories/laboratory.jpg";
import labBanner from "../assets/Laboratory/banner.jpg";

const products = [

  // ================= SURGICAL =================

  {
    id: 1,
    category: "surgical",
    slug: "mayo-scissors",
    name: "Mayo Scissors",
    image: mayoScissorsImg,
    gallery: [mayoScissorsImg, dressingScissorsImg, sp2, surgicalBanner],
    shortDescription: "Premium surgical-grade German stainless steel Mayo scissors with beveled cutting blades.",
    description:
      "Engineered for cutting heavy fascia and dense biological tissues with razor precision. Features tungsten carbide reinforced cutting edges, high-tolerance pivot screw, and ergonomic gold-ring finger loops.",
    material: "German Stainless Steel (AISI 420)",
    finish: "Mirror / Satin Polish",
    modelType: "scissors",
    has3D: true,
    sizes: ["14 cm", "16 cm", "18 cm", "23 cm"],
    sku: "BK-SUR-001",
    price: 28.50,
    features: [
      "Tungsten Carbide Inserts",
      "Corrosion-Proof Passivation",
      "Full Autoclavable at 134°C",
      "DIN EN ISO 13485 & CE Certified",
      "Precision-Ground Beveled Blades",
    ],
  },

  {
    id: 2,
    category: "surgical",
    slug: "artery-forceps",
    name: "Artery Forceps (Halsted Mosquito)",
    image: arteryForcepsImg,
    gallery: [arteryForcepsImg, sp2, sp3, surgicalBanner],
    shortDescription: "Precision hemostatic locking forceps with micro-serrated jaws.",
    description:
      "Essential for clamping small blood vessels and controlling bleeding during delicate surgery. Crafted with a 3-step ratcheted box-lock mechanism and micro-interlocking transversal serrations.",
    material: "German Stainless Steel",
    finish: "Satin Matte Finish",
    modelType: "forceps",
    has3D: true,
    sizes: ["12.5 cm", "14 cm", "16 cm"],
    sku: "BK-SUR-002",
    price: 19.80,
    features: [
      "3-Position Ratchet Lock",
      "Micro-Serrated Grip Surface",
      "Non-Reflective Satin Finish",
      "Ergonomic Finger Loops",
      "Biocompatible Medical Grade",
    ],
  },

  {
    id: 3,
    category: "surgical",
    slug: "needle-holder",
    name: "TC Mayo-Hegar Needle Holder",
    image: needleHolderImg,
    gallery: [needleHolderImg, sp2, sp3, surgicalBanner],
    shortDescription: "Tungsten Carbide cross-serrated jaw needle driver for precise suturing.",
    description:
      "Engineered with gold-plated ring handles indicating genuine Tungsten Carbide jaw inserts. Delivers non-slip grip on surgical needles without fracturing or bending under high tension.",
    material: "German Steel + TC Inserts",
    finish: "Gold TC / Mirror Finish",
    modelType: "forceps",
    has3D: true,
    sizes: ["14 cm", "16 cm", "18 cm", "20 cm"],
    sku: "BK-SUR-003",
    price: 34.00,
    features: [
      "Pyramid Cross-Hatched TC Jaws",
      "Gold-Plated Handle Identification",
      "Smooth Ratchet Engagement",
      "Extended Service Life",
      "Autoclavable Guarantee",
    ],
  },

  {
    id: 4,
    category: "surgical",
    slug: "tissue-forceps",
    name: "Tissue Forceps (Adson 1x2 Teeth)",
    image: tissueForcepsImg,
    gallery: [tissueForcepsImg, sp4, sp6, surgicalBanner],
    shortDescription: "Micro-toothed Adson forceps for atraumatic tissue handling.",
    description:
      "Equipped with precision 1x2 interlocking mouse-teeth tips and a fluted wide thumb rest, ensuring ultra-stable tissue grip with minimal cellular trauma during plastic and general surgery.",
    material: "German Stainless Steel",
    finish: "Satin Anti-Glare",
    modelType: "tweezers",
    has3D: true,
    sizes: ["12 cm", "15 cm"],
    sku: "BK-SUR-004",
    price: 17.50,
    features: [
      "1x2 Interlocking Teeth",
      "Serrated Anti-Slip Thumb Plate",
      "Spring-Tension Calibrated",
      "Corrosion-Resistant Electrolytic Polish",
    ],
  },

  {
    id: 5,
    category: "surgical",
    slug: "scalpel-handle",
    name: "Scalpel Handle No. 3 & No. 4",
    image: scalpelHandleImg,
    gallery: [scalpelHandleImg, sp5, surgicalBanner],
    shortDescription: "Solid ergonomic surgical scalpel handle with laser metric ruler.",
    description:
      "Manufactured with a laser-etched 5cm graduation ruler and cross-milled tactile thumb grip. Compatible with all standard surgical blades (Nos. 10 through 15 for #3, and 20 through 25 for #4).",
    material: "Forged German Stainless Steel",
    finish: "Electropolished Matte",
    modelType: "scalpel",
    has3D: true,
    sizes: ["No. 3 (Standard)", "No. 4 (Heavy)", "No. 7 (Fine)"],
    sku: "BK-SUR-005",
    price: 14.20,
    features: [
      "Laser-Etched Metric Graduation",
      "Deep Cross-Grip Grooves",
      "Zero Blade Play Slotting",
      "Chemical & Heat Resistant",
    ],
  },

  {
    id: 6,
    category: "surgical",
    slug: "dressing-scissors",
    name: "Metzenbaum Dressing Scissors",
    image: dressingScissorsImg,
    gallery: [dressingScissorsImg, mayoScissorsImg, sp2, surgicalBanner],
    shortDescription: "Curved delicate dissection and dressing scissors.",
    description:
      "Designed with blunt/blunt curved tips for safely dissecting delicate internal tissues and trimming surgical dressings without snagging or puncturing.",
    material: "German Stainless Steel",
    finish: "Mirror Polish",
    modelType: "scissors",
    has3D: true,
    sizes: ["14 cm", "18 cm", "20 cm"],
    sku: "BK-SUR-006",
    price: 22.90,
    features: [
      "Curved Blunt/Blunt Profile",
      "Hand-Honed Razor Edge",
      "Ultra-Smooth Screw Hinge",
      "Lifetime Craftsmanship Warranty",
    ],
  },

  // ================= DENTAL =================
  {
    id: 7,
    category: "dental",
    slug: "dental-mirror",
    name: "Front-Surface Dental Mirror #5",
    image: dentalMirrorImg,
    gallery: [dentalMirrorImg, dentalBanner, dentalCategoryImg],
    shortDescription: "Ultra-clear rhodium front-surface anti-fog oral examination mirror.",
    description:
      "Features a scratch-resistant rhodium coated glass mirror that eliminates ghost reflections. Paired with an ergonomic hexagonal knurled handle for superior tactile control.",
    material: "Rhodium Glass & 316L Stainless Steel",
    finish: "Mirror Chrome Finish",
    modelType: "scalpel",
    has3D: true,
    sizes: ["Size 4 (22mm)", "Size 5 (24mm)"],
    sku: "BK-DEN-007",
    price: 11.50,
    features: [
      "Front-Surface Distortion-Free Optics",
      "Anti-Fog High Temperature Glass",
      "Standard Cone Socket Thread",
      "Ultrasonic Cleaner Safe",
    ],
  },

  {
    id: 8,
    category: "dental",
    slug: "explorer",
    name: "Dental Explorer & Periodontal Probe",
    image: dentalExplorerImg,
    gallery: [dentalExplorerImg, dentalMirrorImg, dentalBanner],
    shortDescription: "Double-ended Shepard hook explorer with millimeter periodontal markings.",
    description:
      "Combines a fine #23 shepherd's hook explorer for detecting subgingival caries with a color-coded probe calibrated at 3-6-9-12mm increments.",
    material: "Spring-Tempered Stainless Steel",
    finish: "Satin Non-Glare",
    modelType: "scalpel",
    has3D: true,
    sizes: ["Standard Double-End"],
    sku: "BK-DEN-008",
    price: 13.90,
    features: [
      "Ultra-Sharp Diagnostic Tip",
      "Laser-Etched Depth Bands",
      "Hollow Lightweight Handle",
      "High Tactile Sensitivity",
    ],
  },

  {
    id: 9,
    category: "dental",
    slug: "extraction-forceps",
    name: "Universal Dental Extraction Forceps #150",
    image: dentalExtractionImg,
    gallery: [dentalExtractionImg, dentalExplorerImg, dentalBanner],
    shortDescription: "Upper universal extraction forceps with cross-serrated beaks.",
    description:
      "Ergonomically contoured for extracting maxillary incisors, bicuspids, and roots. Diamond-knurled handles provide firm grip even in wet intraoral environments.",
    material: "Forged German Stainless Steel",
    finish: "Satin Brushed Finish",
    modelType: "forceps",
    has3D: true,
    sizes: ["Adult Universal #150", "Pediatric #150S"],
    sku: "BK-DEN-009",
    price: 36.00,
    features: [
      "Anatomically Contoured Beaks",
      "Diamond Grip Pattern Handle",
      "Heavy-Duty Teflon Hinge Washer",
      "Corrosion-Proof Passivation",
    ],
  },

  // ================= VETERINARY =================

  {
    id: 10,
    category: "veterinary",
    slug: "vet-scissors",
    name: "Veterinary Curved Super-Cut Scissors",
    image: vetScissorsImg,
    gallery: [vetScissorsImg, vetAllisForcepsImg, veterinaryBanner],
    shortDescription: "Heavy-duty veterinary scissors designed for dense animal tissue & suture cutting.",
    description:
      "One micro-serrated blade holds tissue firmly while the razor-honed opposing blade delivers clean, effortless cuts. Built to withstand veterinary clinic sterilization cycles.",
    material: "AISI 420 High-Carbon German Steel",
    finish: "Mirror / Black Micro-Coat",
    modelType: "scissors",
    has3D: true,
    sizes: ["16 cm", "18 cm", "21 cm"],
    sku: "BK-VET-010",
    price: 26.50,
    features: [
      "Micro-Serrated Edge Prevents Slipping",
      "Large Ergonomic Finger Rings",
      "Heavy-Duty Pivot Pin",
      "Resistant to Animal Fluids & Acids",
    ],
  },

  {
    id: 11,
    category: "veterinary",
    slug: "vet-forceps",
    name: "Veterinary Allis Tissue Forceps 5x6",
    image: vetAllisForcepsImg,
    gallery: [vetAllisForcepsImg, vetScissorsImg, veterinaryBanner],
    shortDescription: "Heavy grasping forceps with 5x6 teeth for thick animal tissue management.",
    description:
      "Features multiple interlocking teeth and a heavy ratchet lock to secure fascia and thick subcutaneous layers during large and small animal surgery.",
    material: "German Stainless Steel",
    finish: "Satin Finish",
    modelType: "forceps",
    has3D: true,
    sizes: ["15 cm", "19 cm"],
    sku: "BK-VET-011",
    price: 23.00,
    features: [
      "5x6 Interlocking Teeth Grid",
      "Reinforced Jaws for Heavy Load",
      "Multi-Lock Ratchet System",
      "CE & ISO Veterinary Standard",
    ],
  },

  // ================= BEAUTY =================

  {
    id: 12,
    category: "beauty",
    slug: "cuticle-nipper",
    name: "Cobalt Pro Cuticle Nipper (Quarter Jaw)",
    image: cuticleNipperImg,
    gallery: [cuticleNipperImg, beautyTweezersImg, beautyBanner],
    shortDescription: "Ultra-sharp hand-sharpened cobalt steel cuticle nipper with double spring.",
    description:
      "Crafted for salon professionals. Features 4mm hand-aligned lap-joint blades, ultra-smooth double spring rebound, and titanium rainbow/chrome protective coating.",
    material: "Cobalt Alloy Stainless Steel",
    finish: "Rainbow Titanium / Mirror Polish",
    modelType: "scissors",
    has3D: true,
    sizes: ["Quarter Jaw (4mm)", "Half Jaw (6mm)", "Full Jaw (8mm)"],
    sku: "BK-BTY-012",
    price: 16.50,
    features: [
      "Hand-Honed Surgical Sharpness",
      "Dual Spring Rebound Mechanism",
      "Zero-Overlap Lap Joint",
      "Resistant to Disinfectant Solutions",
    ],
  },

  {
    id: 13,
    category: "beauty",
    slug: "beauty-tweezers",
    name: "Diamond-Tip Slanted Eyebrow Tweezers",
    image: beautyTweezersImg,
    gallery: [beautyTweezersImg, cuticleNipperImg, beautyBanner],
    shortDescription: "Ultra-precise 25-degree slanted tweezers with diamond-dust coated tips.",
    description:
      "Calibrated with perfect 25-degree slant angle and hand-filed diamond coated tips to grab even the finest ingrown hairs from the root without snapping.",
    material: "Surgical Grade Stainless Steel",
    finish: "Matte Soft-Touch / Rose Gold",
    modelType: "tweezers",
    has3D: true,
    sizes: ["Standard 9.5 cm"],
    sku: "BK-BTY-013",
    price: 9.99,
    features: [
      "25° Hand-Filed Precision Angle",
      "Diamond Dust Grip Coating",
      "Calibrated Light Spring Tension",
      "Includes Protective Tip Cap",
    ],
  },

  // ================= LAB =================

  {
    id: 14,
    category: "laboratory",
    slug: "lab-spatula",
    name: "Micro Spoon & Lab Spatula (Double-Ended)",
    image: labSpatulaImg,
    gallery: [labSpatulaImg, labForcepsImg, labBanner],
    shortDescription: "Chemical-resistant dual-ended laboratory micro sampling spatula.",
    description:
      "Features a 5mm micro-spoon on one end and a flat rounded blade spatula on the other. Ideal for sampling reagents, chemical powders, and biological specimens in cleanroom labs.",
    material: "Acid-Resistant 316 Stainless Steel",
    finish: "Electropolished Mirror",
    modelType: "scalpel",
    has3D: true,
    sizes: ["15 cm", "20 cm"],
    sku: "BK-LAB-014",
    price: 8.50,
    features: [
      "Non-Magnetic Grade 316 Steel",
      "Acid & Alkali Chemical Resistant",
      "Seamless One-Piece Construction",
      "Flame & Autoclave Sterilizable",
    ],
  },

  {
    id: 15,
    category: "laboratory",
    slug: "lab-forceps",
    name: "PTFE-Coated Laboratory Tweezers",
    image: labForcepsImg,
    gallery: [labForcepsImg, labSpatulaImg, labBanner],
    shortDescription: "Non-stick chemical inert tweezers for delicate sample and wafer handling.",
    description:
      "Constructed with high-purity stainless steel body and anti-static tips. Designed for cleanroom specimen handling, electron microscopy grids, and hazardous chemical environments.",
    material: "304 Stainless Steel + PTFE",
    finish: "Electropolished / Anti-Static",
    modelType: "tweezers",
    has3D: true,
    sizes: ["12.5 cm", "16 cm"],
    sku: "BK-LAB-015",
    price: 14.75,
    features: [
      "Anti-Static ESD Safe",
      "Non-Magnetic Tips",
      "Resistant to Strong Acids & Solvents",
      "Smooth Flat Serrated Tips",
    ],
  },

];



export default products;