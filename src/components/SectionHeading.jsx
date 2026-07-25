const SectionHeading = ({ subtitle, title, description, light = false, center = true }) => {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""} mb-16`}>
      {subtitle && (
        <p className="inline-block rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-[var(--accent)]">
          {subtitle}
        </p>
      )}
      <h2
        className={`mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px] ${
          light ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed ${
            light ? "text-gray-300" : "text-[var(--text-secondary)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
