'use-client'

export  function Blogs(){

    const blogList =[
        {
            Title:"Part 1: Docker with Node.js & Express.js - The Complete Beginner's Guide",
            desc:"A beginner-friendly guide demonstrating how to containerize a Node.js and Express.js application using Docker. Showcases image creation, container management, and workflow automation for consistent app deployment.",
            image:"https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
            link:"https://github.com/Abhi00045/Docker-With-Node.js-and-Express.js.git"
        },
    ]

    return(
    <>
    <div className='p-1.5 m-1.5'>
        <h1 className='text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300'>Writings</h1>
        <div className='flex flex-col flex-wrap gap-4 p-1.5 h-full w-full' id='main-section'>
            {
                blogList.map((blog,index)=>(
                    <div key={index} className='flex flex-row justify-around gap-1.5 p-2.5 bg-white/90 dark:bg-black/15  h-full bg-white-900 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-7 border border-gray-50 inset-0 w-fit'>
                        <div id="leftImage" className=''>
                                    <img src={blog.image} alt="" className='mx-auto w-70 h-32 border border-gray-200 dark:border-white/19 rounded-lg' />
                        </div>
                        <a href="" className="text-white ">
                            <div className="p-2.5 flex flex-col gap-1.5" >
                            <div id="right-sec-upper" className='flex flex-row justify-between items-center'>
                                <div id="upper-title">
                                    <h1 className='font-extralight text-2xl text-blue-200'>{blog.Title}</h1>
                                </div>
                                <div id="upper-source" className='flex flex-row gap-2.5 text-xl cursor-pointer '>
                                </div>
                            </div>
                            <div id="right-sec-lower" className='text-base'>
                                <p>{blog.desc}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
    </>
    )
}