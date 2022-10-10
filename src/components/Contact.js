import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.2284541912875!2d77.41879238359533!3d28.79545495987769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf7b3c422ea39%3A0x6ece490324b45029!2sRewri%20Rewra%2C%20Uttar%20Pradesh%20201206!5e0!3m2!1sen!2sin!4v1665045828738!5m2!1sen!2sin"
          />

          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Rewari rewara Muradnagar <br />
                GZB UttarPardesh 201206
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                aashishkaushik266@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">7017259411</p>
            </div>
          </div>
        </div>

        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Contact me
          <br />
          aashishkaushik266@gmail.com
        </h2>
        <button onClick={"https://twitter.com/Aashishkaushik_"}>Twitter</button>
      </div>
    </section>
  );
}
