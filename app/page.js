import CodeFrame from "../components/CodeFrame";
import styles from "./page.module.css";

const effects = [
  {
    key: "morphing-blob",
    title: "Morphing Liquid Spotlight",
    description:
      "Aurora-style blob layers ease across the surface and re-shape on hover for a fluid hero treatment or feature callout.",
    Demo: MorphingBlobCard,
    code: `
<div class="blob-card">
  <div class="blob-pill">liquid</div>
  <h3>Floating aurora stories</h3>
  <p>Hover to see the spotlight flex into a new silhouette.</p>
  <button class="blob-cta">Explore</button>
</div>

<style>
  .blob-card {
    position: relative;
    overflow: hidden;
    border-radius: 32px;
    padding: 40px;
    background: radial-gradient(circle at top, #142045 0%, #080d1f 65%);
    color: #dfe7ff;
    isolation: isolate;
    transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .blob-card::before,
  .blob-card::after {
    content: "";
    position: absolute;
    inset: -20%;
    background: radial-gradient(circle at 30% 30%, rgba(0, 209, 255, 0.65), transparent 60%);
    mix-blend-mode: screen;
    filter: blur(0);
    transform: rotate(0deg) scale(1);
    animation: blob-wander 10s ease-in-out infinite;
    z-index: -1;
  }

  .blob-card::after {
    background: radial-gradient(circle at 70% 70%, rgba(255, 86, 198, 0.6), transparent 55%);
    animation-delay: -5s;
  }

  .blob-card:hover {
    transform: translateY(-6px);
  }

  .blob-card:hover::before,
  .blob-card:hover::after {
    filter: blur(6px);
    transform: rotate(18deg) scale(1.12);
  }

  .blob-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    backdrop-filter: blur(10px);
    background-color: rgba(12, 22, 49, 0.35);
    border: 1px solid rgba(117, 171, 255, 0.4);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
  }

  .blob-cta {
    margin-top: 30px;
    border: none;
    border-radius: 999px;
    padding: 12px 26px;
    background: linear-gradient(135deg, rgba(0, 194, 255, 0.8), rgba(242, 81, 255, 0.8));
    color: #030712;
    font-weight: 600;
    cursor: pointer;
    transition: background-position 320ms ease, transform 320ms ease;
    background-size: 200% 200%;
  }

  .blob-card:hover .blob-cta {
    background-position: 80% 20%;
    transform: translateY(-2px);
  }

  @keyframes blob-wander {
    0%,
    100% {
      transform: translate(-5%, -8%) scale(1) rotate(0deg);
    }
    45% {
      transform: translate(8%, 12%) scale(1.05) rotate(12deg);
    }
    75% {
      transform: translate(-10%, 6%) scale(0.96) rotate(-8deg);
    }
  }
</style>
    `
  },
  {
    key: "ripple-button",
    title: "Deep Water Ripple Button",
    description:
      "Layered gradients and an expanding highlight simulate a water ripple every time the CTA is pressed.",
    Demo: RippleButtonStage,
    code: `
<button class="ripple-button">
  <span>Start the tide</span>
</button>

<style>
  .ripple-button {
    position: relative;
    overflow: hidden;
    padding: 18px 46px;
    border-radius: 999px;
    border: 0;
    font-size: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0a1327;
    cursor: pointer;
    background: linear-gradient(135deg, #7afcff, #7ae1ff 40%, #a47aff 100%);
    filter: drop-shadow(0 18px 30px rgba(103, 178, 255, 0.25));
    transition: transform 240ms ease;
    isolation: isolate;
  }

  .ripple-button::before,
  .ripple-button::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.45), transparent 65%);
    opacity: 0;
    transform: scale(0.35);
    transition: opacity 500ms ease, transform 500ms ease;
  }

  .ripple-button::after {
    filter: blur(20px);
    opacity: 0.2;
  }

  .ripple-button span {
    position: relative;
    z-index: 2;
    font-weight: 700;
  }

  .ripple-button:active {
    transform: scale(0.97);
  }

  .ripple-button:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 4px;
  }

  .ripple-button:active::before,
  .ripple-button:active::after {
    opacity: 1;
    transform: scale(1.02);
  }

  .ripple-button:hover::before {
    opacity: 0.8;
    transform: scale(1.05);
  }
</style>
    `
  },
  {
    key: "wave-curtain",
    title: "Glass Wave Curtain Reveal",
    description:
      "A translucent wave-sheet masks the content and glides away, mimicking a liquid curtain being pulled aside.",
    Demo: WaveCurtainStage,
    code: `
<div class="wave-card">
  <div class="wave-content">
    <h3>Crystal Coastline</h3>
    <p>Experience refracted light as the glass tide rolls back.</p>
  </div>
</div>

<style>
  .wave-card {
    position: relative;
    overflow: hidden;
    border-radius: 28px;
    padding: 36px;
    background: linear-gradient(135deg, rgba(12, 26, 55, 0.95), rgba(21, 40, 88, 0.65));
    border: 1px solid rgba(115, 170, 255, 0.25);
    color: #f5fbff;
    backdrop-filter: blur(12px);
    isolation: isolate;
  }

  .wave-card::before {
    content: "";
    position: absolute;
    top: -10%;
    left: -80%;
    width: 65%;
    height: 130%;
    background: linear-gradient(135deg, rgba(118, 190, 255, 0.85), rgba(255, 255, 255, 0.1));
    filter: blur(0);
    transform: skewX(-12deg);
    opacity: 0.6;
    animation: wave-loop 7s ease-in-out infinite;
  }

  .wave-card::after {
    content: "";
    position: absolute;
    inset: 1px;
    border-radius: inherit;
    border: 1px solid rgba(130, 190, 255, 0.25);
    pointer-events: none;
  }

  .wave-card:hover::before {
    animation-play-state: paused;
    left: 120%;
  }

  .wave-content {
    position: relative;
    z-index: 1;
  }

  @keyframes wave-loop {
    0% {
      left: -80%;
      filter: blur(0);
    }
    45% {
      left: 10%;
      filter: blur(6px);
    }
    100% {
      left: 120%;
      filter: blur(0);
    }
  }
</style>
    `
  },
  {
    key: "gooey-loader",
    title: "Gooey Orbit Loader",
    description:
      "SVG filters and offset timings keep three droplets merging into each other as they orbit a center point.",
    Demo: GooeyOrbitStage,
    code: `
<div class="gooey-scene">
  <svg width="0" height="0">
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -7"
        result="gooey" />
      <feBlend in="SourceGraphic" in2="gooey" />
    </filter>
  </svg>
  <div class="gooey-track">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
  .gooey-scene {
    display: grid;
    place-items: center;
    width: 220px;
    height: 160px;
    background: radial-gradient(circle at top, rgba(40, 76, 140, 0.4), rgba(5, 12, 30, 0.9));
    border-radius: 28px;
    border: 1px solid rgba(106, 162, 255, 0.2);
    filter: drop-shadow(0 12px 28px rgba(22, 40, 88, 0.45));
  }

  .gooey-track {
    position: relative;
    width: 120px;
    height: 120px;
    display: grid;
    place-items: center;
    filter: url(#gooey);
  }

  .gooey-track span {
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #6bcbff, #4a8cff 70%);
    animation: gooey-orbit 2.6s ease-in-out infinite;
  }

  .gooey-track span:nth-child(2) {
    animation-delay: -0.85s;
    background: radial-gradient(circle at 40% 40%, #ff8ef7, #8f7aff 70%);
  }

  .gooey-track span:nth-child(3) {
    animation-delay: -1.7s;
    background: radial-gradient(circle at 40% 40%, #7fffd4, #45d6ff 70%);
  }

  @keyframes gooey-orbit {
    0%,
    100% {
      transform: rotate(0deg) translateX(0);
    }
    33% {
      transform: rotate(120deg) translateX(24px);
    }
    66% {
      transform: rotate(240deg) translateX(-24px);
    }
  }
</style>
    `
  }
];

function MorphingBlobCard() {
  return (
    <div className={styles.blobCard}>
      <div className={styles.blobPill}>liquid</div>
      <h3>Floating aurora stories</h3>
      <p>Hover to see the spotlight flex into a new silhouette.</p>
      <button className={styles.blobCta}>Explore</button>
    </div>
  );
}

function RippleButtonStage() {
  return (
    <div className={styles.rippleStage}>
      <button className={styles.rippleButton}>
        <span>Start the tide</span>
      </button>
    </div>
  );
}

function WaveCurtainStage() {
  return (
    <div className={styles.waveCard}>
      <div className={styles.waveContent}>
        <h3>Crystal Coastline</h3>
        <p>Experience refracted light as the glass tide rolls back.</p>
      </div>
    </div>
  );
}

function GooeyOrbitStage() {
  return (
    <div className={styles.gooeyScene}>
      <svg className={styles.hiddenSvg} width="0" height="0">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </svg>
      <div className={styles.gooeyTrack}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Liquid motion pattern library</p>
        <h1>Top-tier fluid transitions for cooler interfaces</h1>
        <p className={styles.subhead}>
          Explore production-ready motion ideas that layer morphing gradients, glass, and
          gooey effects for shimmering depth. Each block pairs the live demo with annotated
          markup so you can plug it straight into your next launch.
        </p>
      </header>

      <section className={styles.deck}>
        {effects.map(({ key, title, description, Demo, code }) => (
          <article key={key} className={styles.effectCard}>
            <div className={styles.effectHeader}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className={styles.effectBody}>
              <div className={styles.stage}>
                <Demo />
              </div>
              <CodeFrame code={code} language="html" />
            </div>
          </article>
        ))}
      </section>
      <footer className={styles.footer}>
        <p>
          Built for Vercel deployments — drop these transitions into hero sections, CTA
          rails, onboarding flows, or feature reveals whenever you need irresistible liquid
          flair.
        </p>
      </footer>
    </main>
  );
}
