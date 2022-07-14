import React from "react";
import { BsTwitter, BsLinkedin,BsDownload,BsGithub } from "react-icons/bs";
function Contact() {
   return (
      <div className="app__social">
         <div>
            <a href="https://github.com/CharlesMotsisi">
                <BsGithub/>
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/charles-motsisi-4875a0228/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="">
               <BsDownload />
            </a>
         </div>
        
      </div>
   );
}
export default Contact;