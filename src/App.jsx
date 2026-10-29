// import Topbar from "./Topbar";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import Content from "./Content";
// import Footer from "./Footer";
// import Dhex from "./Dhex";

// function Apps () {
//   return (
//     <> 
//     <Topbar/>
//     <Navbar/>
//     <Hero/>
//     <Content/>
//     <Footer/>
//     <Dhex/>
 
    

//     </>
//   )
// }
// export default Apps;

///// kan anigaa ku soo daray

import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import Dhex from "./Dhex";
import Footer from "./Footer";



function Apps () {
  return (
    <> 
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Content/>
      <Dhex/>
      <Footer/>
    </>
  )
}

export default Apps;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Topbar from "./Topbar";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import Content from "./Content";
// import Dhex from "./Dhex";
// import Footer from "./Footer";

// import About from "./pages/About";
// import Academics from "./pages/Academics";
// import Admissions from "./pages/Admissions";
// import Student from "./pages/Student";
// import Contact from "./pages/Contact";

// function Apps() {
//   return (
//     <BrowserRouter>

//       <Topbar />
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Content />
//               <Dhex />
//               <Footer />
//             </>
//           }
//         />

//         <Route path="/about" element={<About />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/admissions" element={<Admissions />} />
//         <Route path="/student" element={<Student />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default Apps;