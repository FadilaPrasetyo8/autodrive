import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  price?: string;
};

export function FeatureCard({ title, description, icon, price }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-cyan/20 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      {/* glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-primary blur-2xl"></div>

      {/* content */}
      <div className="relative z-10">
        {/* icon */}
        <div className="mb-4 text-cyan text-3xl">{icon}</div>

        {/* title */}
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

        {/* desc */}
        <p className="text-white/70 text-sm mb-4">{description}</p>

        {/* footer */}
        <div className="flex items-center justify-between">
          {price && <span className="text-cyan font-semibold">{price}</span>}

          <button className="text-sm text-white/80 hover:text-cyan transition">
            Lihat Detail →
          </button>
        </div>
      </div>
    </div>
  );
}
