export default function NoiseTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] opacity-20 mix-blend-multiply"
    >
      <div className="paper-grain h-full w-full animate-grain" />
    </div>
  );
}
