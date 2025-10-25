

"use client"

export default function Contact() {



  

  return (
    <section id="contact" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl py-3 px-6 shadow-lg transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 items-center">
                          <a 
                key={index}
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                title={contact.platform}
              >
                {contact.icon}
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}