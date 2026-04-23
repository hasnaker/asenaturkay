export default function Blobs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="blob"
        style={{
          width: 520,
          height: 520,
          background: "#E8D5C4",
          top: -160,
          left: -140,
        }}
      />
      <div
        className="blob"
        style={{
          width: 480,
          height: 480,
          background: "#D4B5C4",
          top: 260,
          right: -160,
        }}
      />
      <div
        className="blob"
        style={{
          width: 420,
          height: 420,
          background: "#C7D0BB",
          bottom: -180,
          left: "40%",
        }}
      />
    </div>
  );
}
