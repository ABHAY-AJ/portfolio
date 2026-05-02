const streams = [
  { left: "6%", delay: "0s", text: "0110  API  1101  AWS" },
  { left: "18%", delay: "1.4s", text: "QUEUE  0101  WORKER" },
  { left: "32%", delay: "2.7s", text: "S3  CDN  1010  EDGE" },
  { left: "52%", delay: "0.8s", text: "AI  MEDIA  FFmpeg" },
  { left: "69%", delay: "2.1s", text: "POSTGRES  REDIS" },
  { left: "84%", delay: "1.1s", text: "SOCKET  STRIPE" }
];

export default function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden="true">
      <div className="tech-backdrop-grid" />
      <div className="tech-scan-beam" />
      <div className="circuit-trace trace-a">
        <span />
        <span />
        <span />
      </div>
      <div className="circuit-trace trace-b">
        <span />
        <span />
        <span />
      </div>
      <div className="circuit-trace trace-c">
        <span />
        <span />
      </div>
      {streams.map((stream) => (
        <div
          key={stream.left}
          className="data-stream"
          style={{ left: stream.left, animationDelay: stream.delay }}
        >
          <span>{stream.text}</span>
          <span>{stream.text}</span>
          <span>{stream.text}</span>
        </div>
      ))}
    </div>
  );
}
