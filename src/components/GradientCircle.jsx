export default function GradientCircle({ size, position }) {
  return (
    <div
      className={`absolute ${position}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(176,48,48,0.35) 0%, rgba(176,48,48,0.15) 40%, rgba(176,48,48,0.05) 60%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}
