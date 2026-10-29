// import React from 'react';

// export default function Footer() {
//   return (
//     <footer style={{
//       backgroundColor: '#0f172a',
//       color: '#94a3b8',
//       padding: '40px 20px 20px 20px',
//       fontFamily: 'sans-serif',
//       borderTop: '100px solid #0033ff'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         gap: '30px',
//         marginBottom: '30px'
//       }}>
//         <div>
//           <h3 style={{ color: '#fff', margin: '0 0 10px 0' }}>About UNISO</h3>
//           <p style={{ maxWidth: '300px', fontSize: '14px', lineHeight: '1.6' }}>The University of Somalia (UNISO) is dedicated to academic excellence, research, and community engagement. We strive to prepare students for leadership and service, fostering innovation and cultural understanding..</p>
//         </div>
//         <div>
//           <h4 style={{ color: '#fff', margin: '0 0 10px 0' }}>Xiriirka</h4>
//           <p style={{ fontSize: '14px', margin: '5px 0' }}>Mogadishu, Somalia</p>
//           <p style={{ fontSize: '14px', margin: '5px 0' }}>Email: info@uniso.edu.so</p>
//         </div>
//       </div>
//       <div style={{
//         textAlign: 'center',
//         paddingTop: '20px',
//         borderTop: '1px solid #334155',
//         fontSize: '13px'
//       }}>
//         <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} University of Somalia (UNISO). All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About UNISO</h3>
          <p>
            The University of Somalia (UNISO) is dedicated to academic
            excellence, research, and community engagement. We strive to
            prepare students for leadership and service, fostering innovation
            and cultural understanding.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Mogadishu, Somalia <br />
          Email: info@uniso.edu.so</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} University of Somalia (UNISO). All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;