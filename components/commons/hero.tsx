export function Hero() {
  return (
    <section className="bg-background py-32 text-center">
      <h1 className="text-4xl font-bold mb-4 text-foreground">Solusi Transportasi Masa Depan</h1>

      <p className="text-muted-foreground max-w-xl mx-auto">
        Jelajahi kendaraan terbaik dengan teknologi modern dan kenyamanan maksimal.
      </p>

      {/* CTA */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="
            bg-primary-gradient
            text-white
            px-6 py-3 rounded-lg
            shadow-cyan
            hover:opacity-90
            transition
          "
        >
          Mulai Sekarang
        </button>

        <button className="border border-border px-6 py-3 rounded-lg hover:bg-muted">
          Lihat Koleksi
        </button>
      </div>
    </section>
  );
}
