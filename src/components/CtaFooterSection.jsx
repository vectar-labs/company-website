export const CtaSection = () => {
  return (
    <section className="w-full bg-white px-4 text-center relative overflow-hidden">
      {/* Dot grid background — remove this block to go back to plain */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" fill="#085041" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto py-20">
        <h2 className="text-[#021a14] text-2xl sm:text-3xl font-bold mb-3">Ready to modernize your institution?</h2>
        <p className="text-[#085041] text-lg mb-7 leading-relaxed">Book a free consultation and see how we can transform the way your institution operates.</p>
        <button
          className="bg-[#121212] text-white font-bold
          text-sm py-3 px-8 rounded-full cursor-pointer"
        >
          Get free consultation
        </button>
      </div>
    </section>
  );
};
