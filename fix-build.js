// Fix build errors - writes corrected files
const fs = require('fs');

// ===== Products.jsx =====
const productsContent = `import { Link } from "react-router-dom";
import AnimatedSection from "../../components/AnimatedSection";
import surgical from "../../assets/Categories/surgical.jpg";
import dental from "../../assets/Categories/dental.jpg";
import veterinary from "../../assets/Categories/veterinary.jpg";
import beauty from "../../assets/Categories/beauty.jpg";
import laboratory from "../../assets/Categories/laboratory.jpg";

function Products() {
  const categories = [
    {title:"Surgical Instruments",description:"Precision surgical instruments manufactured for hospitals, clinics and healthcare professionals worldwide.",image:surgical,link:"/products/surgical"},
    {title:"Dental Instruments",description:"Professional dental instruments designed for accuracy, durability and everyday clinical use.",image:dental,link:"/products/dental"},
    {title:"Veterinary Instruments",description:"Reliable veterinary instruments engineered for modern animal healthcare procedures.",image:veterinary,link:"/products/veterinary"},
    {title:"Beauty Instruments",description:"Premium beauty and cosmetic instruments crafted with exceptional finishing and precision.",image:beauty,link:"/products/beauty"},
    {title:"Laboratory Instruments",description:"High-quality laboratory instruments for research, diagnostics and scientific testing.",image:laboratory,link:"/products/laboratory"},
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">Our Products</p>
          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold text-[var(--text)] leading-tight">Premium Medical Instruments</h1>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">Discover our complete range of precision-crafted medical instruments designed for hospitals, clinics, laboratories and healthcare professionals around the world.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(function(item,index){return (
            <AnimatedSection key={item.title} delay={index*0.1}>
