function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
}) {
  const variants = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/20",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border border-cyan-500/30",
    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;