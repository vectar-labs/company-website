const partners = [
  { name: "Golden Trust", sub: "Nursery & Primary", abbr: "G", color: "#0f172a" },
  { name: "Dodoma", sub: "University", abbr: "DU", color: "#1d4ed8" },
  { name: "Al-Noor", sub: "Islamic School", abbr: "A", color: "#0d9488" },
  { name: "Nyerere", sub: "Secondary", abbr: "NS", color: "#7c3aed" },
  { name: "Mwanga", sub: "Primary", abbr: "M", color: "#b45309" },
  { name: "Ibrahimu", sub: "College", abbr: "ICS", color: "#dc2626" },
];

export const PartnersSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold mb-8">Trusted by leading institutions</h2>
        <p className="text-slate-500 text-sm mb-10 max-w-lg">
          Schools and universities across Tanzania and East Africa rely on our platform to manage, teach, and communicate better.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-7 py-3   pl-0">
              {/* Replace this div with <img src={p.logo} /> when you have real logos */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: p.color }}
              >
                {p.abbr}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 text-sm font-bold leading-tight">{p.name}</span>
                <span className="text-slate-400 text-xs">{p.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
