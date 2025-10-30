'user-client'
import React from 'react'


function Xpirence() {

    const ExpList= [
        {
            id:1,
            Company:"Geekster",
            role:"Full Stack Developer- Intern",
            desc:"Led the development of a high-performance, server-rendered web application using React.js, TypeScript, and RESTful APIs, integrating session storage for chat history and feedback systems to boost interaction accuracy by 15%, while optimizing cross-platform UI with Tailwind CSS, modular components, and MongoDB enhancing scalability, user engagement, and team efficiency through agile collaboration.",
            from:"Nov. 2024",
            to:"Jan. 2025"
        }
    ]
  return (
    <>
     <section id="Exp" className="p-5 pl-7 m-3.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 ">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
          Experience
        </h2>
          <div className="space-y-2 flex flex-row flex-wrap gap-1.5">
          {ExpList.map((category, Index) => ( 
            <div key={Index} className="space-y-3 ">              
              <div className="flex flex-wrap flex-col items-start gap-3 ">
                <h3 className="text-xl font-extralight text-black dark:text-white transition-colors duration-300">
                {category.role}
              </h3>
              <div className='flex flex-row justify-between gap-3.5 items-center'>
                <pre className="text-lg font-light text-black dark:text-white transition-colors duration-300">
                {category.Company}
              </pre>
              <pre>{category.from} - {category.to}</pre>
              </div>
              <p>
                {category.desc}
              </p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>       
    </>
  )
}

export default Xpirence