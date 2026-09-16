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
        <Image
          className="life-beyond-illustration"
          src="/images/hobbies.png"
          alt="A hand-drawn camera, plant, books about movies and music, and a framed mountain landscape"
          width={1873}
          height={840}
          sizes="(max-width: 800px) calc(100vw - 48px), 58vw"
        />

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
      </section>
    </main>
  );
}
