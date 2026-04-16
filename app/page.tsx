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
    name: "Porshe 911",
    price: "Rp 1.1 M",
    image: "https://images.unsplash.com/photo-1593353798398-6024b7444bb6",
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
    text: "Mobil impian akhirnya kebeli, thanks AutoDrive 🙌",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#070B1A] text-white min-h-screen ">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}

      <section id="home" className="min-h-screen flex items-center ">
        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763"
          alt="car"
          fill
          className="object-cover opacity-30"
        />
        <div className="grid md:grid-cols-2 gap-10 items-center px-5 md:px-10 w-full">
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight mb-4 md:mb-6">
              Temukan Mobil <br className="hidden md:block" /> Impian Anda
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-white/60 mb-6 md:mb-8">
              Marketplace mobil modern dengan pilihan terbaik dan harga kompetitif.
            </p>

            {/* SEARCH BOX */}
            <div className="bg-white/5 backdrop-blur p-3 md:p-4 rounded-xl flex flex-col md:flex-row gap-3">
              <input
                placeholder="Search..."
                className="bg-transparent border border-white/10 px-3 py-2 rounded-md text-sm md:text-base flex-1"
              />

              <select className="bg-transparent border border-white/10 px-3 py-2 rounded-md text-sm md:text-base">
                <option>Brand</option>
              </select>

              <select className="bg-transparent border border-white/10 px-3 py-2 rounded-md text-sm md:text-base">
                <option>Type</option>
              </select>

              <button className="bg-cyan-500 cursor-pointer px-4 py-2 rounded-md text-sm md:text-base">
                Search
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[250px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1611651186486-415f04eb78e4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="car"
              fill
              className="object-contain drop-shadow-[0_0_80px_rgba(34,211,238,0.7)]"
            />
          </div>
        </div>
      </section>

      {/* BODY TYPE */}
      <section id="category" className="px-5 md:px-10 pb-10 mt-4">
        <h3 className="mb-4 md:mb-6 text-lg md:text-xl font-semibold">Kategori Mobil</h3>

        <div className="flex gap-3 md:gap-4 flex-wrap">
          {["SUV", "Sedan", "Sport", "Electric"].map((item) => (
            <div
              key={item}
              className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-white/5 rounded-xl hover:bg-cyan-500/20 cursor-pointer transition border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CAR LIST */}
      <section id="cars" className="px-5 md:px-10 pb-20">
        <h3 className="mb-6 md:mb-8 text-lg md:text-xl font-semibold">Mobil Terbaru</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cars.map((car, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.03] transition"
            >
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className="w-full h-44 md:h-48 object-cover"
              />

              <div className="p-4 md:p-5">
                <h4 className="text-base md:text-lg font-semibold">{car.name}</h4>

                <p className="text-sm md:text-base text-cyan-400 mb-3 md:mb-4">{car.price}</p>

                <button className="w-full bg-cyan-500 py-2 rounded-lg text-sm md:text-base hover:bg-cyan-600">
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonial" className="px-5 md:px-10 pb-20">
        <h3 className="text-lg md:text-xl font-semibold mb-8">Kenapa Pilih AutoDrive?</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Kualitas Terjamin", "Harga Terbaik", "Garansi Resmi", "Support 24/7"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white/5 p-5 rounded-xl text-center text-sm md:text-base"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </section>
      <section className="px-5 md:px-10 pb-20">
        <h3 className="text-lg md:text-xl font-semibold mb-10 text-center">Apa Kata Mereka</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-[1.02] transition relative overflow-hidden"
            >
              {/* glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition" />

              {/* user */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />

                <div>
                  <h4 className="text-sm md:text-base font-semibold">{item.name}</h4>
                  <p className="text-xs text-white/50">{item.role}</p>
                </div>
              </div>

              {/* text */}
              <p className="text-sm md:text-base text-white/70 mb-4">“{item.text}”</p>

              {/* rating */}
              <div className="text-cyan-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="text-center py-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Siap Punya Mobil Impian?</h3>
        <button className="bg-cyan-500 px-6 py-3 rounded-xl cursor-pointer">Hubungi Kami</button>
      </section>
      <footer className="px-5 md:px-10 py-10 border-t border-white/10 text-white/60 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4">
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
