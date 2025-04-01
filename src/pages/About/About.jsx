import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Innovator, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Shivaibhav Dewangan, a passionate Full-Stack Developer with 
                a strong focus on creating seamless, user-centric applications. With expertise 
                in both front-end and back-end technologies, I specialize in building scalable web 
                solutions that deliver great user experiences.
              </p>
              <p className="text-white">
                In addition to my full-stack development skills, I have a keen interest 
                in Data Science and AI, which I incorporate into my projects to make them 
                smarter and more efficient. I'm constantly exploring new technologies and 
                frameworks to stay ahead of the curve and improve my development workflow.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    As a lifelong learner and innovator, I'm committed to contributing 
                    to the developer community with tools, ideas, and solutions that add 
                    real value. My goal is to create impactful applications that solve 
                    real-world problems while continuously expanding my skills.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Shivaibhav Dewangan
                    </cite>
                    <div className="flex items-center gap-2">
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
