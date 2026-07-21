type DecorativeGlowProps = {
  className?: string;
};

const DecorativeGlow = ({ className = "" }: DecorativeGlowProps) => {
  return (
    <div
      aria-hidden="true"
      className={`
          pointer-events-none absolute
          rounded-full
          bg-[radial-gradient(circle_closest-side_at_center,rgba(60,99,197,0.8)_35%,#F0F4FE_100%)]
          blur-[52px]
          ${className}
        `}
    />
  );
};

export default DecorativeGlow;
