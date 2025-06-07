import React from "react";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-gray-800 dark:text-gray-200">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg">
          I'm Adam - a student and self-taught developer who loves creating
          things for the web. Whether it’s a quick experiment or a full-stack
          project, I enjoy turning ideas into reality through code.
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">My Background</h2>
        <p>
          My journey began when I discovered the potential that coding offers -
          the power to solve real-world problems, boost productivity, and even
          entertain people around the world. Programming opens up endless
          possibilities. You choose your path and watch as lines of code evolve
          into something truly meaningful.
        </p>
        <p>
          That’s exactly what I strive for as a programmer. I'm passionate about
          creating - whether it’s writing, art, or invention. Creative work
          fulfills me because it fuels curiosity and pushes me to grow. I’m
          always learning, whether through online resources, documentation,
          experimentation, or by tackling projects that stretch my abilities.
        </p>
      </section>

      {/* Motivation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What Drives Me</h2>
        <p>
          I'm genuinely passionate about coding. I love to experiment, and
          programming gives me the freedom to explore ideas. When inspiration
          strikes, code allows me to bring it to life - whether it’s a basic web
          app or an advanced AI concept. What excites me most is how I can blend
          my other interests into programming, making it a space where all my
          passions intersect.
        </p>
        <p>
          I don’t just want to write code - I want to understand how things
          work, and how I can apply that knowledge creatively and effectively.
          Mastery isn't a finish line; it’s a continuous process of discovery
          and refinement. For me, that ongoing journey is what makes life
          meaningful.
        </p>
      </section>

      {/* Beyond Code */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Outside of Code</h2>
        <p>
          My life beyond coding is just as fulfilling and closely tied to my
          values. I enjoy reading - not just for learning, but to expand my
          imagination. I deeply admire writers who can stir emotions or provoke
          thought through nothing but words.
        </p>
        <p>
          I'm also fascinated by science. I believe understanding is essential,
          and science offers a way to make sense of the world that’s both
          practical and profound. Another passion of mine is chess - I can't
          quite explain why, but it continues to inspire me with its balance of
          logic, strategy, and beauty.
        </p>
        <p>
          I also enjoy music, movies, and series - not just for entertainment,
          but as a way to recharge and escape. Stories, soundtracks, and
          fictional worlds help spark new ideas and often remind me why I create
          in the first place.
        </p>
      </section>
    </div>
  );
}
