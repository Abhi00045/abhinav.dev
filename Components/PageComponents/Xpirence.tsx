'user-client'
import React from 'react'


function Xpirence() {

    const ExpList= [
        {
            id:1,
            Company:"Geekster | India",
            role:"Mern Stack Developer - Intern",
            desc:"",
            from:"",
            to:""
        }
    ]
  return (
    <>
     <section id="Exp" className="p-5 pl-7 m-3.5 bg-white/90 dark:bg-black/15  h-full w-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 ">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
          Experience
        </h2>
          <div className="space-y-2 flex flex-row flex-wrap gap-2">
          {ExpList.map((category, Index) => ( 
            <div key={Index} className="space-y-3 ">              
              <div className="flex flex-wrap flex-col items-start gap-3">
                <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                {category.role}
              </h3>
              <div className='flex flex-row justify-between gap-3.5'>
                <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                {category.Company}
              </h2>
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