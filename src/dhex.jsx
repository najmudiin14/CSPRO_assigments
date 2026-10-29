// function Dhex (){
//     return(
//         <>
        
//         {/* ================= STATS SECTION (Sawirka 3-aad) ================= */}
//         <section style={{ backgroundColor: '#0033ff', padding: '50px 24px', margin: '40px 0' }}>
//           <div style={{
//             maxWidth: '1200px',
//             margin: '0',
//             display: 'flex',
//             flexDirection: 'row',
//             // gap: '20px'
          
//           }}>
//             {/* Card 1 */}
//             <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <span style={{ fontSize: '30px' }}>🎓</span>
//               <div>
//                 <h3 style={{ margin: 0, fontSize: '26px', color: '#0f172a' }}>23,248</h3>
//                 <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Graduate Students</p>
//               </div>
//             </div>
//             {/* Card 2 */}
//             <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <span style={{ fontSize: '30px' }}>🌐</span>
//               <div>
//                 <h3 style={{ margin: 0, fontSize: '26px', color: '#0f172a' }}>10,810</h3>
//                 <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Undergraduate Students</p>
//               </div>
//             </div>
//             {/* Card 3 */}
//             <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <span style={{ fontSize: '30px' }}>📖</span>
//               <div>
//                 <h3 style={{ margin: 0, fontSize: '26px', color: '#0f172a' }}>950</h3>
//                 <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Postgraduate Students</p>
//               </div>
//             </div>
//             {/* Card 4 */}
//             <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
//               <span style={{ fontSize: '30px' }}>🏆</span>
//               <div>
//                 <h3 style={{ margin: 0, fontSize: '26px', color: '#0f172a' }}>450</h3>
//                 <p style={{ margin: 0, fontSize: '13px', color: '#64748b', fontWeight: '500' }}>Academic Staff</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         </>
      
//     )
// }

// export default Dhex;




function Dhex() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stats-card">
          <span className="stats-icon">🎓</span>
          <div>
            <h3>23,248</h3>
            <p>Graduate Students</p>
          </div>
        </div>

        <div className="stats-card">
          <span className="stats-icon">🌐</span>
          <div>
            <h3>10,810</h3>
            <p>Undergraduate Students</p>
          </div>
        </div>

        <div className="stats-card">
          <span className="stats-icon">📖</span>
          <div>
            <h3>950</h3>
            <p>Postgraduate Students</p>
          </div>
        </div>

        <div className="stats-card">
          <span className="stats-icon">🏆</span>
          <div>
            <h3>450</h3>
            <p>Academic Staff</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Dhex;