"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="pt-28 pb-20 text-center bg-white">
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="text-blue-600">GEN</span>
        </h1>

        <h2 className="text-2xl mt-4 font-semibold">
          Global Export Network
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A private, vetted trade infrastructure connecting premium food and beverage brands
          with established distributors across Southeast Asia.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-black text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition">
            Apply as Brand
          </button>

          <button className="border border-black px-8 py-3 rounded font-semibold hover:bg-black hover:text-white transition">
            Apply as Distributor
          </button>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-10">
            Designed for Serious Market Expansion
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h4 className="font-semibold mb-3">Vetted Entry</h4>
              <p className="text-gray-600">
                Every brand and distributor is screened before acceptance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Structured Deal Flow</h4>
              <p className="text-gray-600">
                Introductions are controlled, monitored and professionally facilitated.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Scalable Infrastructure</h4>
              <p className="text-gray-600">
                Built for 500+ high-end brands across ASEAN markets.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="py-16 text-center border-t border-b">
        <p className="text-lg font-medium">
          Invitation-Based. Relationship-Driven. Performance-Aligned.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-400">
        © {new Date().getFullYear()} GEN Global Export Network
      </footer>

    </div>
  );
}
