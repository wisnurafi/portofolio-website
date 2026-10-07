import Reveal from "@/components/reveal";

const roles = [
  { k: "now", t: "Security Engineer", active: true, detail: "BeyondSoft Singapore" },
  { k: "past", t: "Systems Software Engineer", active: false, detail: "past · BeyondSoft Singapore" },
  { k: "lane", t: "Reverse engineering", active: false, detail: "where source ends, I begin" },
];

export default function Profile() {
  return (
    <Reveal id="profile">
      <section className="panel">
        <span className="panel-label">profile</span>
        <h2>
          Curious about <span className="acc">broken</span> things
        </h2>
        <p className="lede">Two roles, one method: follow the evidence until the fix is obvious.</p>
        <div className="rows">
          {roles.map((r) => (
            <div className="row prow-role" key={r.k}>
              <span className="rk">{r.k}</span>
              <span className="rt">{r.t}</span>
              <span className="rd">
                {r.active ? (
                  <>
                    <b>ACTIVE</b> · {r.detail}
                  </>
                ) : (
                  r.detail
                )}
              </span>
            </div>
          ))}
        </div>
        <p className="bio">
          I get curious when something only breaks for one user, on one machine, at the worst
          possible time. <b>I trust a bug after I can reproduce it twice.</b> A finding is not
          finished until the fix is obvious.
        </p>
      </section>
    </Reveal>
  );
}
