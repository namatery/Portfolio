import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, Coffee, MessagesSquare, Wrench } from "lucide-react";

const personalValues = [
  {
    title: "Staying curious",
    icon: BookOpen,
    description:
      "There’s always something new to understand. I enjoy asking questions and following where they lead.",
  },
  {
    title: "Building useful things",
    icon: Wrench,
    description:
      "I care about making things that solve real problems and make someone’s day easier.",
  },
  {
    title: "Sharing knowledge",
    icon: MessagesSquare,
    description:
      "Learning becomes more valuable when you pass it on. I enjoy sharing what I discover and learning from others.",
  },
  {
    title: "Making room for life",
    icon: Coffee,
    description:
      "Good work matters to me, and so do the people and moments around it. I try to make time for both.",
  },
];

const careerMilestones = [
  {
    year: "2020",
    title: "Started university",
    description:
      "Began studying computer engineering and fell in love with backend development.",
  },
  {
    year: "2022",
    title: "First professional experience",
    description:
      "Joined my first team and worked on real-world systems, learning a ton along the way.",
  },
  {
    year: "2024",
    title: "Deeper into distributed systems",
    description:
      "Worked on scalable systems, performance improvements, and AI-powered products.",
  },
  {
    year: "Now",
    title: "Building & learning",
    description:
      "Currently working as a backend engineer, building products, writing, and exploring what’s next.",
  },
];

const hobbies = [
  {
    title: "Coffee",
    caption: "A daily ritual.",
    description:
      "I love coffee — the ritual, the craft, and the small moments of calm it brings. From experimenting with different beans and brewing methods to finding the perfect spot, coffee helps me slow down, reset, and think more clearly.",
    image: "/images/coffee.png",
    width: 1536,
    height: 1024,
  },
  {
    title: "Rock & Metal",
    caption: "Fuel for the mind.",
    description:
      "High-energy music, especially rock and metal, keeps me going. It clears my mind, boosts my mood, and helps me focus — whether I’m working, working out, or just need a mental reset.",
    image: "/images/music.png",
    width: 1536,
    height: 1024,
  },
  {
    title: "Games",
    caption: "Play. Explore. Unwind.",
    description:
      "Games are my way to relax, explore new worlds, and experience great stories. Whether it’s competitive shooters, immersive single-player games, or just a casual session with friends, they give me a break and a different perspective.",
    image: "/images/game.png",
    width: 1536,
    height: 1024,
  },
  {
    title: "Adrenaline & Adventure",
    caption: "Step outside.",
    description:
      "I’m always up for activities that get the adrenaline flowing — escape rooms, hiking, bungee jumping, or trying new experiences. They push me out of my comfort zone, help me stay present, and remind me that the best stories often happen outside it.",
    image: "/images/adrenaline.png",
    width: 1375,
    height: 1144,
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "A deeper look at Alireza Rezapour, a backend engineer, lifelong learner, and thoughtful problem solver.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="container-shell page-shell about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <header className="about-hero-copy">
          <p className="eyebrow">
            <span className="availability-dot" aria-hidden="true" />
            About me
          </p>
          <h1 id="about-title">A bit more about me</h1>
          <div className="about-hero-description">
            <p>
              I&apos;m Alireza Rezapour, a backend engineer, lifelong learner, and
              someone who enjoys turning complex problems into simple, reliable
              solutions.
            </p>
            <p>
              This page is a deep dive into who I am, what I care about, and the
              journey I&apos;m on — both in tech and in life.
            </p>
          </div>
        </header>

        <Image
          className="about-hero-illustration"
          src="/images/about-me.png"
          alt="A hand-drawn workspace overlooking Tehran, with a laptop, books, coffee, plants, and notes about learning and building"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 800px) calc(100vw - 48px), 54vw"
        />
      </section>

      <section className="career-story" aria-labelledby="career-story-title">
        <header className="about-section-heading">
          <p className="about-section-label">01. My Journey</p>
          <span className="about-section-heading-line" aria-hidden="true" />
          <h2 id="career-story-title">From curiosity to a career</h2>
        </header>
        <div className="career-story-copy">
          <p>
            I’ve always been curious about how things work — from small scripts to
            large distributed systems. What started as curiosity in high school
            turned into a deep interest in software engineering, and eventually a
            career.
          </p>
          <p>
            Over the past few years, I’ve worked on backend systems, developer
            tools, and AI products, mostly in the fintech and infrastructure space.
            I enjoy building things that are reliable, scalable, and actually
            useful.
          </p>
        </div>

        <ol className="career-timeline" aria-label="Career milestones">
          {careerMilestones.map((milestone) => (
            <li className="career-timeline-entry" key={milestone.year}>
              <span className="career-timeline-year">{milestone.year}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="personal-values" aria-labelledby="personal-values-title">
        <header className="about-section-heading">
          <p className="about-section-label">02. MY VALUES</p>
          <span className="about-section-heading-line" aria-hidden="true" />
          <h2 id="personal-values-title">What I care about</h2>
        </header>

        <ul className="personal-values-grid">
          {personalValues.map((value) => (
            <li className="personal-value-note" key={value.title}>
              <div className="personal-value-heading">
                <value.icon
                  className="personal-value-icon"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3>{value.title}</h3>
              </div>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="life-beyond" aria-labelledby="life-beyond-title">
        <header className="about-section-heading">
          <p className="about-section-label">03. OUTSIDE OF WORK</p>
          <span className="about-section-heading-line" aria-hidden="true" />
          <h2 id="life-beyond-title">Life beyond code</h2>
        </header>
        <div className="life-beyond-intro">
          <div className="life-beyond-copy">
            <p>
              When I&apos;m not in front of a computer, you&apos;ll probably find me
              making coffee, watching a good movie, listening to music (techno,
              house, or rock), or exploring new ideas.
            </p>
            <p>
              I&apos;m also interested in photography, games, and travel. I believe
              these hobbies help me stay creative and bring fresh perspectives to my
              work.
            </p>
          </div>
          <Image
            className="life-beyond-illustration"
            src="/images/hobbies.png"
            alt="A hand-drawn camera, plant, books about movies and music, and a framed mountain landscape"
            width={1873}
            height={840}
            sizes="(max-width: 800px) calc(100vw - 48px), 58vw"
          />
        </div>
        <ul className="hobby-grid">
          {hobbies.map((hobby, index) => (
            <li className="hobby-card" key={hobby.title}>
              <header className="hobby-heading">
                <span className="hobby-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{hobby.title}</h3>
                <p>{hobby.caption}</p>
              </header>
              <p className="hobby-description">{hobby.description}</p>
              <Image
                className={`hobby-illustration${hobby.image === "/images/game.png" ? " hobby-illustration-game" : ""}`}
                src={hobby.image}
                alt=""
                width={hobby.width}
                height={hobby.height}
                sizes="(max-width: 800px) 70vw, 390px"
              />
            </li>
          ))}
        </ul>
        <aside className="exploring-banner" aria-labelledby="exploring-title">
          <Image
            className="exploring-trees"
            src="/images/tree.png"
            alt=""
            width={1536}
            height={1024}
            sizes="100px"
          />
          <div className="exploring-copy">
            <h3 id="exploring-title">Always exploring</h3>
            <p>
              These are just a few pieces of the puzzle. I’m always curious to try
              new things, meet new people, and collect experiences that make life
              more interesting.
            </p>
          </div>
          <Image
            className="exploring-backpack"
            src="/images/backpack.png"
            alt="More life, better ideas."
            width={2172}
            height={724}
            sizes="(max-width: 540px) calc(100vw - 80px), (max-width: 800px) 32vw, 420px"
          />
        </aside>
      </section>
    </main>
  );
}
