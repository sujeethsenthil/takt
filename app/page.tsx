export default function Home() {
  return (
    <div className="wrap">
      <header>
        <div className="wordmark">
          <span className="glyph" />
          Takt
        </div>
      </header>

      <main>
        <div className="status">
          <span className="dot" />
          Upgrade underway
        </div>

        <h1>
          <span className="l1">A new Takt</span>
          <span className="l2">is taking shape.</span>
        </h1>

        <p className="lede">
          We&apos;re rolling out a significant upgrade to the software behind
          Takt. The redesigned interface is nearly ready &mdash; built to be
          faster, clearer, and closer to the work it supports. It will be here
          soon.
        </p>

        <div className="progress">
          <div className="track">
            <div className="bar" />
          </div>
          <div className="track-label">Rebuilding the interface</div>
        </div>
      </main>

      <footer>
        <span className="sig">Takt</span>
        <span>Back online shortly. We&apos;ll see you on the other side.</span>
      </footer>
    </div>
  );
}
