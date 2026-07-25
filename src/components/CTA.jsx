import { Link } from "react-router-dom";
import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";

function CTA() {
  return React.createElement(

    "section",
    { className: "relative py-24 overflow-hidden bg-[var(--accent)]" },
    React.createElement(
      "div",
      { className: "absolute inset-0 opacity-10" },
      React.createElement("div", { className: "absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white blur-[100px]" }),
      React.createElement("div", { className: "absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-[100px]" })
    ),
    React.createElement(
      "div",
      { className: "relative max-w-7xl mx-auto px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement("h2", { className: "text-4xl lg:text-5xl font-bold text-white leading-tight" }, "Ready to Work With Beck Instruments?"),
        React.createElement("p", { className: "mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed" }, "Contact our team today to discuss your requirements and get a customized quotation for premium surgical instruments."),
        React.createElement(
          "div",
          { className: "mt-10 flex flex-col sm:flex-row justify-center gap-5" },
          React.createElement(
            Link,
            { to: "/contact", className: "group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[var(--accent)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95" },
            "Request Quote",
            React.createElement(FiArrowRight, { className: "transition-all duration-300 group-hover:translate-x-1", size: 18 })
          ),
          React.createElement(
            "a",
            { href: "tel:+1234567890", className: "group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl active:scale-95" },
            React.createElement(FiPhone, { size: 18 }),
            " Call Us Now"
          )
        )
      )
    )
  );
}

export default CTA;
