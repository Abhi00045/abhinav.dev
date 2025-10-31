'use-client'

export  function Blogs(){

    const blogList =[
        {
            Title:"Part 1: Docker with Node.js & Express.js - The Complete Beginner's Guide",
            desc:"A beginner-friendly guide demonstrating how to containerize a Node.js and Express.js application using Docker. Showcases image creation, container management, and workflow automation for consistent app deployment.",
            image:"https://i.pinimg.com/736x/5b/46/6b/5b466b71e1cc4b9cf6ff3361c0e976c3.jpg",
            link:"https://medium.com/@rajidiabhinavreddy/docker-with-node-js-express-js-a-complete-beginners-guide-part-1-d5cd0ae90b7f"
        },
    ]

    return(
    <>
    <div className="p-3 m-2">
  <h1 className="text-3xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
    Writings
  </h1>

  <div id="main-section" className="flex flex-col gap-6 w-full">
    {blogList.map((blog, index) => (
      <a
        key={index}
        href={blog.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-black/15 backdrop-blur-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-[1.02] hover:border-white"
      >
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.Title}
            className="w-64 h-40 md:w-72 md:h-44 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left">
          <h2 className="font-semibold text-xl text-blue-400">{blog.Title}</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {blog.desc}
          </p>
        </div>
      </a>
    ))}
  </div>
</div>

    </>
    )
}