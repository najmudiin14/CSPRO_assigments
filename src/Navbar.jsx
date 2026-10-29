// import Logo from './img/logo.png';
// import React, { useEffect, useState } from "react";

// function Navbar (){
//     return(
//         <>
//         <div className="navbar">
//             <div className="navbar-centre">
//                 <div className="navbar-left">
//                     <img src={Logo} alt="logo" />
//                     <h2>University of <br /> Somalia (UNISO)</h2>
//                 </div>
//                 <div className="navbar-right">
//                     <ul>
//                         <li>About Us</li>
//                         <li>Academics</li>
//                         <li>Admissions</li>
//                         <li>Student</li>
//                         <li>Contact</li>
                        
//                     </ul>
//                 </div>
//             </div>
//         </div>

// const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50)
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// return (
//   <nav className={scrolled ? "navbar scrolled" : "navbar"}>
//     {/* Navbar content */}
//   </nav>
// );
        
//         </>
//     )
// }
// export default Navbar;


// import React, { useEffect, useState } from "react";
// import Logo from "./img/logo.png";

// function Navbar() {
    
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };

//   }, []);


//   return (
//     <nav className={scrolled ? "navbar scrolled" : "navbar"}>


//  <div className="navbar">
//           <div className="navbar-centre">
//                  <div className="navbar-left">
//                      <img src={Logo} alt="logo" />
//                      <h2>University of <br /> Somalia (UNISO)</h2>
//                  </div>
//                  <div className="navbar-right">
//                     <ul>
//                          <li>About Us</li>
//                          <li>Academics</li>
//                          <li>Admissions</li>
//                          <li>Student</li>
//                          <li>Contact</li>
                        
//                      </ul>
//                  </div>
//              </div>
//          </div>

//     </nav>
//   );
// }

// export default Navbar;



// qeybta dambe 
import React, { useEffect, useState } from "react";
import Logo from "./img/logo.png";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="navbar-centre">

        <div className="navbar-left">
          <img src={Logo} alt="Logo" />
          <h2>University of <br /> Somalia (UNISO)</h2>
        </div>

        <div className="navbar-right">
          <ul>
            <li>Register</li>
            <li>About Us</li>
            <li>Academics</li>
            <li>Student</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;