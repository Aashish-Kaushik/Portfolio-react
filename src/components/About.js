import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Aashish Kaushik.
            <br className="hidden lg:inline-block" />I am Backend Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am Aashish kaushik, an experienced Backend Developer specializing in creating efficient and scalable web applications.
            With a strong passion for coding Throughout my career, 
            I have gained proficiency in languages such a JavaScript, along with a deep understanding of backend technologies like Node.js. 
            I have worked extensively with databases such as MySQL, MongoDB and I am adept at developing RESTful APIs .I’m a lifelong learner .
          </p>
          <div className="flex justify-center">
            <a
              href="#skills"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Skills
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
