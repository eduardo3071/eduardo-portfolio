export function AmbientBackground() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed -top-[20%] -right-[10%] -z-10 h-[800px] w-[800px] rounded-full bg-violet-core/20 blur-[140px] mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-[20%] -left-[10%] -z-10 h-[700px] w-[700px] rounded-full bg-cyan-sharp/10 blur-[140px] mix-blend-screen"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_30%,transparent_100%)]"
      />
    </>
  );
}
