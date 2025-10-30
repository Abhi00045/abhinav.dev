'user-client'
import React from 'react'


function Xpirence() {

    const ExpList= [
        {
            id:1,
            Company:"",
            role:"",
            desc:"",
            from:"",
            to:""
        }
    ]
  return (
    <>
    <div className='p-1.5 m-1.5'>
            <h1 className='text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300'>Projects</h1>
            <div className='flex flex-col flex-wrap gap-4 p-1.5 h-full w-full' id='main-section'>
                {
                    ExpList.map((project,index)=>(
                        <div key={index} className='flex flex-row justify-around gap-1.5 p-2.5 bg-white/90 dark:bg-black/15  h-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 w-fit'>
                            <div className="p-2.5 flex flex-col gap-1.5" >
                                <div id="right-sec-upper" className='flex flex-row justify-between items-center'>
                                    <div id="upper-title">
                                        <h1 className='font-extralight text-2xl text-blue-200'>{project.Company}</h1>
                                    </div>
                                    <div id="upper-source" className='flex flex-row gap-2.5 text-xl cursor-pointer '>
                                        {/* <button onClick={() => setPreview(!preview)}>
    
                                            {preview?<FaRegEye/>:<FaRegEyeSlash/>}
    
                                        </button>
                                        {
                                            preview && (
                                                <div id="video" className=''>
                                                    
                                                </div>
                                            )
                                        } */}
                                    </div>
                                </div>
                                <div id="right-sec-lower" className='text-base'>
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Xpirence