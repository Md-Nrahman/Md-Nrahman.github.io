import React from "react";

const Experience = () => {
  return (
    <section className="lg:px-32 md:px-14 px-7 flex flex-col justify-center py-14 bg-gray-800 min-h-screen">
      <h1 className="font-bold md:text-5xl text-2xl text-center text-white mb-3">
        <span className="text-[#66bb6a]">&#60;</span>Experience
        <span className="text-[#66bb6a]">&#47;&#62;</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-7">
        <div className="mt-8">
          <h3 className="text-white font-medium text-xl text-center">Job</h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-6">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="p-5 text-white border-[#66bb6a] border rounded-2xl">
                <p className="text-xs">January, 2021 - Present</p>
                <h5 className="">
                  <span className="text-[#66bb6a] text-lg font-medium">
                    Suffix IT Ltd.
                  </span>{" "}
                  <span className="text-xs">- Software Engineer</span>
                </h5>
                <ul className="text-xs list-disc ml-4">
                  <li>
                    Developed classified Softwares like:Sales Force, ERP, SAAS
                    Softwares, Inventory Management etc. with React JS For
                    Suffix IT Ltd.
                  </li>
                  <li>Did front-end Design and implementation</li>
                  <li>Used React hook form for validation</li>
                  <li>
                    Created Custom hooks for implementing features that is being
                    used frequently
                  </li>
                  <li>
                    Implemented authentication with the functionality of access
                    token and refresh token
                  </li>
                  <li>
                    Used blobs data and converted them to file for the users to
                    download
                  </li>
                  <li>Tested REST endpoints using POSTMAN.</li>
                  <li>
                    Used redux to store data globally and for easy retrieval of
                    data to any component in the app.
                  </li>
                  <li>
                    Used React Refs, Controlled and Un Controlled react
                    components for different use cases.
                  </li>
                  <li>
                    Maximized use of Events and promises in ES6 and React for
                    application control flow.
                  </li>
                  <li>
                    Worked with AXIOS, promise based HTTP client for the browser
                    and node.js for hitting REST endpoints and fetching data
                    into the app.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-white font-medium text-xl text-center">
            Education
          </h3>
          <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-6">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="p-5 text-white border-[#66bb6a] border rounded-2xl">
                <p className="text-xs">April, 2020</p>
                <h5 className="">
                  <span className="text-[#66bb6a] text-lg font-medium">
                    Southeast University
                  </span>{" "}
                  <span className="text-xs">- B.Sc. in CSE</span>
                </h5>
                <p className="text-xs">CGPA: 3.59</p>
              </div>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="p-5 text-white border-[#66bb6a] border rounded-2xl">
                <p className="text-xs">June, 2015</p>
                <h5 className="">
                  <span className="text-[#66bb6a] text-lg font-medium">
                    Bangladesh Navy College, Dhaka
                  </span>{" "}
                  <span className="text-xs">- H.S.C (Science)</span>
                </h5>
                <p className="text-xs">GPA: 5.00</p>
              </div>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <div className="p-5 text-white border-[#66bb6a] border rounded-2xl">
                <p className="text-xs">May, 2013</p>
                <h5 className="">
                  <span className="text-[#66bb6a] text-lg font-medium">
                    Shaheed Police Smrity College, Dhaka
                  </span>{" "}
                  <span className="text-xs">- S.S.C (Science)</span>
                </h5>
                <p className="text-xs">GPA: 5.00</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
