export const Testimonial = () => {
  return (
    <section className="w-full bg-[#121212] py-32 px-4 text-center relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="noise" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" x="0" y="0" fill="white" />
            <rect width="1" height="1" x="2" y="2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#noise)" />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Quote mark */}
        <div className="text-[#07f0c9] text-4xl font-bold leading-none mb-6 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
          "
        </div>

        {/* Quote text */}
        <blockquote
          className="text-slate-100 text-xl sm:text-2xl font-semibold italic leading-relaxed mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          They didn't just build what we asked for — they challenged our thinking, improved our product spec, and delivered something better than we imagined.
        </blockquote>

        {/* Attribution */}
        <p className="text-gray-500 text-sm font-medium tracking-wide">— Head Teacher, Dar es Salaam Secondary School</p>
      </div>
    </section>
  );
};
