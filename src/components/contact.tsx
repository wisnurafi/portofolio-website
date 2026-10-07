import Reveal from "@/components/reveal";

export default function Contact() {
  return (
    <Reveal id="contact">
      <section className="panel">
        <span className="panel-label">contact</span>
        <h2>
          Weird bug? <span className="acc">Say hello.</span>
        </h2>
        <p className="lede">
          I reply fastest to specific messages. Logs, repro steps, or a short context dump help a
          lot.
        </p>
        <a className="mail-big" href="mailto:wsnfii60@gmail.com">
          wsnfii60@gmail.com
        </a>
        <div className="chans">
          <a
            className="chan"
            href="https://github.com/wisnurafi"
            target="_blank"
            rel="noreferrer"
          >
            <p className="k">github</p>
            <p className="v">wisnurafi ↗</p>
          </a>
          <a className="chan" href="mailto:wsnfii60@gmail.com">
            <p className="k">email</p>
            <p className="v">direct ↗</p>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
