import Reveal from "@/components/reveal";
import JakartaClock from "@/components/jakarta-clock";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap" style={{ width: "100%", position: "relative" }}>
        <span className="hero-mark" aria-hidden="true">
          wr
        </span>
        <Reveal>
          <p className="hero-kicker2">wisnu rafi — portfolio ©2026</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero-statement">
            I trust a bug after I can reproduce it <span className="acc">twice.</span>
            <span className="cur" />
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="hero-role">
            <b>Security Engineer</b> — BeyondSoft Singapore
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="hero-line">
            I build Windows tools people actually install. Then I take systems apart to prove
            exactly how they fail.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <p className="hero-now">
            <span className="sq" />
            now: security engineer by day · shipping by night
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="hero-facts">
            <div>
              <span className="k">base</span>
              <span className="v">
                Jakarta, ID · <JakartaClock />
              </span>
            </div>
            <div>
              <span className="k">focus</span>
              <span className="v">
                <b>reverse</b> engineering · <b>red</b> team
              </span>
            </div>
            <div>
              <span className="k">shipped</span>
              <span className="v">
                6 projects · <b>all live</b>
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={440}>
          <div className="hero-cta">
            <a className="btn solid" href="#work">
              view work
            </a>
            <a
              className="btn"
              href="https://github.com/wisnurafi"
              target="_blank"
              rel="noreferrer"
            >
              github ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
