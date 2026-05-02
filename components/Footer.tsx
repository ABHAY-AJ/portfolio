export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 text-sm text-slate-400 md:grid-cols-3 md:items-center">
        <p>Building systems where AI, media, and cloud meet.</p>
        <p className="text-left md:text-center">Simple on the surface. Reliable under pressure.</p>
        <a href="#home" className="text-left text-cyan-200 transition hover:text-white md:text-right">
          Back to top ^
        </a>
      </div>
      <p className="mx-auto mt-4 max-w-7xl font-mono text-xs text-slate-600">
        No templates. No noise. Just systems that work.
      </p>
    </footer>
  );
}
