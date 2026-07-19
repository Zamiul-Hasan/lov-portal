function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-900/80
        backdrop-blur-md
        border
        border-cyan-500/20
        rounded-2xl
        shadow-lg
        shadow-cyan-500/10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        hover:shadow-cyan-500/30
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;