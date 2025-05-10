// src/components/LudoBoard.jsx
import React from 'react';
import '../styles/ludo.css';

const LudoBoard = () => {
  return (
    <div className="outer">
      {/* Top Row */}
      <div className="box_row">
        {/* Red Box */}
        <div className="box" style={{ border: '50px solid red' }}>
          {Array(4).fill(0).map((_, i) => <div key={i} className="circle border_red"></div>)}
        </div>

        {/* Vertical Ladder - Left */}
        <div className="v_lad">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={rowIndex} className="v_lad_row">
              {[...Array(3)].map((_, cellIndex) => {
                const isGreen = (
                  (rowIndex === 1 && cellIndex >= 1) ||
                  (rowIndex === 2 && cellIndex <= 1) ||
                  (rowIndex >= 3 && cellIndex === 1)
                );
                const isStar = (rowIndex === 1 && cellIndex === 2) || (rowIndex === 2 && cellIndex === 0);
                return (
                  <div key={cellIndex} className={`v_lad_cell ${isGreen ? 'green' : ''}`}>
                    {isStar && <span className="star">&#9733;</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Green Box */}
        <div className="box" style={{ border: '50px solid green' }}>
          {Array(4).fill(0).map((_, i) => <div key={i} className="circle border_green"></div>)}
        </div>
      </div>

      {/* Middle Row */}
      <div className="middle_row">
        {/* Left Horizontal Ladder */}
     {/* <div className="h_lad">
  {[...Array(3)].map((_, rowIndex) => (
    <div key={rowIndex} className="h_lad_row">
      {[...Array(6)].map((_, i) => 5 - i).map((cellIndex) => {
        const isRed = (
          (rowIndex === 0 && cellIndex === 1) ||
          (rowIndex === 1 && cellIndex > 0) ||
          (rowIndex === 2 && cellIndex === 2)
        );
        const isStar = (rowIndex === 0 && cellIndex === 1) || (rowIndex === 2 && cellIndex === 2);
        return (
          <div key={cellIndex} className={`h_lad_cell ${isRed ? 'red' : ''}`}>
            {isStar && <span className="star">&#9733;</span>}
          </div>
        );
      })}
    </div>
  ))}
</div> */}



<div className="h_lad">
  {[...Array(3)].map((_, rowIndex) => (
    <div key={rowIndex} className="h_lad_row">
      {[...Array(6)].map((_, i) => 5 - i).map((cellIndex) => {
        const isRed = (
          (rowIndex === 0 && cellIndex === 4) ||
          (rowIndex === 1 && cellIndex < 5) ||
          (rowIndex === 2 && cellIndex === 3)
        );
        const isStar = (rowIndex === 0 && cellIndex === 4) || (rowIndex === 2 && cellIndex === 3);
        return (
          <div key={cellIndex} className={`h_lad_cell ${isRed ? 'red' : ''}`}>
            {isStar && <span className="star">&#9733;</span>}
          </div>
        );
      })}
    </div>
  ))}
</div>




        {/* Center Triangle */}
        <div className="ludo_home"></div>

        {/* Right Horizontal Ladder */}
        <div className="h_lad">
          {[...Array(3)].map((_, rowIndex) => (
            <div key={rowIndex} className="h_lad_row">
              {[...Array(6)].map((_, cellIndex) => {
                const isYellow = (
                  (rowIndex === 0 && cellIndex === 3) ||
                  (rowIndex === 1 && cellIndex < 5) ||
                  (rowIndex === 2 && cellIndex === 4)
                );
                const isStar = (rowIndex === 0 && cellIndex === 3) || (rowIndex === 2 && cellIndex === 4);
                return (
                  <div key={cellIndex} className={`h_lad_cell ${isYellow ? 'yellow' : ''}`}>
                    {isStar && <span className="star">&#9733;</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="box_row">
        {/* Blue Box */}
        <div className="box" style={{ border: '50px solid blue' }}>
          {Array(4).fill(0).map((_, i) => <div key={i} className="circle border_blue"></div>)}
        </div>

        {/* Vertical Ladder - Right */}
        <div className="v_lad">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={rowIndex} className="v_lad_row">
              {[...Array(3)].map((_, cellIndex) => {
                const isBlue = (
                  (rowIndex >= 0 && rowIndex <= 2 && cellIndex === 1) ||
                  (rowIndex === 3 && (cellIndex === 1 || cellIndex === 2)) ||
                  (rowIndex === 4 && cellIndex <= 1)
                );
                const isStar = (rowIndex === 3 && cellIndex === 2) || (rowIndex === 4 && cellIndex === 0);
                return (
                  <div key={cellIndex} className={`v_lad_cell ${isBlue ? 'blue' : ''}`}>
                    {isStar && <span className="star">&#9733;</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Yellow Box */}
        <div className="box" style={{ border: '50px solid yellow' }}>
          {Array(4).fill(0).map((_, i) => <div key={i} className="circle border_yellow"></div>)}
        </div>
      </div>
    </div>
  );
};

export default LudoBoard;
