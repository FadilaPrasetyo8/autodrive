import Navbar from "@/components/commons/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    name: "BMW M3",
    price: "Rp 1.2 M",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068",
  },
  {
    name: "Mercedes C300",
    price: "Rp 950 Juta",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
  },
  {
    name: "Porsche 911",
    price: "Rp 1.1 M",
    image: "https://images.unsplash.com/photo-1593353798398-6024b7444bb6",
  },
  {
    name: "Tesla Model S",
    price: "Rp 1.4 M",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
  },
];

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Pengusaha",
    text: "Pelayanan cepat dan mobilnya sesuai ekspektasi!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Siti Rahma",
    role: "Karyawan Swasta",
    text: "Proses mudah, harga transparan. Recommended banget!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Budi Santoso",
    role: "Freelancer",
    text: "Mobil impian akhirnya kebeli 🙌",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070B1A] text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* background */}
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763"
          alt="car"
          fill
          priority
          className="object-cover opacity-40"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#060816]/80" />

        {/* glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-center lg:px-8">
          <div className="animate-fade-up opacity-0-init mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            🚘 Marketplace Mobil Premium
          </div>

          <h1 className="animate-fade-up opacity-0-init delay-100 mx-auto max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
            Temukan Mobil
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Impian Anda
            </span>
          </h1>

          <p className="animate-fade-up opacity-0-init delay-200 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Jelajahi koleksi mobil premium dengan desain modern, performa terbaik, dan pengalaman
            membeli yang elegan.
          </p>

          {/* search */}
          <div className="animate-fade-up opacity-0-init delay-300 mx-auto mt-12 max-w-4xl rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
            <div className="grid gap-3 md:grid-cols-[1fr_160px_160px_140px]">
              <input
                placeholder="Cari mobil..."
                className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 outline-none transition focus:border-cyan-400"
              />

              <select className="h-14 rounded-2xl border border-white/10 bg-white/5 px-4 outline-none">
                <option>Brand</option>
              </select>

              <select className="h-14 rounded-2xl border border-white/10 bg-white/5 px-4 outline-none">
                <option>Tipe</option>
              </select>

              <button className="h-14 rounded-2xl bg-cyan-500 font-semibold transition hover:bg-cyan-400">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section id="category" className="pb-14">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h3 className="mb-6 text-lg font-semibold md:text-xl">Kategori Mobil</h3>

          <div className="flex flex-wrap gap-4">
            {["SUV", "Sedan", "Sport", "Electric", "Luxury"].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm backdrop-blur-xl transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CARS */}
      <section id="cars" className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-lg font-semibold md:text-xl">Mobil Terbaru</h3>

            <button className="text-sm text-cyan-400 hover:text-cyan-300">Lihat Semua</button>
          </div>

          <div className="relative overflow-hidden">
            <div className="animate-marquee flex gap-6 w-max">
              {[...cars, ...cars].map((car, i) => (
                <div
                  key={i}
                  className="min-w-[320px] max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={400}
                    height={250}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">
                    <h4 className="text-lg font-semibold">{car.name}</h4>

                    <p className="mb-5 mt-2 text-cyan-400">{car.price}</p>

                    <button className="w-full rounded-2xl bg-cyan-500 py-3 font-medium transition hover:bg-cyan-400">
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="testimonial" className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h3 className="mb-8 text-lg font-semibold md:text-xl">Kenapa Pilih AutoDrive?</h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Kualitas Terjamin", "Harga Terbaik", "Garansi Resmi", "Support 24/7"].map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm backdrop-blur-xl md:text-base"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-lg font-semibold md:text-xl">Apa Kata Mereka</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition hover:opacity-100" />

                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full border border-white/10 object-cover"
                  />

                  <div>
                    <h4 className="text-sm font-semibold md:text-base">{item.name}</h4>

                    <p className="text-xs text-white/50">{item.role}</p>
                  </div>
                </div>

                <p className="mb-4 text-sm text-white/70 md:text-base">“{item.text}”</p>

                <div className="text-sm text-cyan-400">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="pb-24">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-10 text-center backdrop-blur-2xl">
            <h3 className="text-3xl font-bold md:text-4xl">Siap Punya Mobil Impian?</h3>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Dapatkan pengalaman membeli mobil yang cepat, modern, dan transparan bersama
              AutoDrive.
            </p>

            <button className="mt-8 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2025 AutoDrive</p>

          <div className="flex gap-4">
            <Link href="#">Instagram</Link>
            <Link href="#">WhatsApp</Link>
            <Link href="#">Email</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
