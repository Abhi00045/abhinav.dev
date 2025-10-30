

"use client"
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
// import { FaDiscord } from "react-icons/fa6";
// import { FaRegFile } from "react-icons/fa6";
import { FileUser } from 'lucide-react';

export default function Footer() {

  const SocialLinks = [
    {
        id:1,
        name:"Twitter",
        social:"https://x.com/abhilostsoul",
        icon:<Twitter/>

    },
    {
        id:2,
        name:"Linkdin",
        social:"linkdin.com",
        icon: <Linkedin />
    },
    {
        id:3,
        name:"Github",
        social:"https://github.com/Abhi00045",
        icon:<Github/>
    },
    {
        id:4,
        name:"Mail",
        social:"abhinavreddy891@gmail.com",
        icon:<Mail />
    },
    {
      id:5,
      name :"Resume",
      social:"https://drive.google.com/file/d/1FzyGWhcSEqAE6zWA3CbXfs5Tdqqrs6TG/view?usp=drive_link",
      icon:<FileUser />
    }
]


  return (
     <section id="contact" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl py-3 px-6 shadow-lg transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 items-center">
            {SocialLinks.map((contact, index) => (              
              <a 
                key={index}
                href={contact.social} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg "
                title={contact.name}
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}