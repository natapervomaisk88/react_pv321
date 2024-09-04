import { useState } from 'react';

const Canvas = () => {
  const [bgColor, setBgColor] = useState('white');

  const changeBackgroundColor = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <>
    <div>
      <canvas
        width={800}
        height={600}
        style={{ border: '1px solid black', backgroundColor: bgColor }}
      />
      <div style={{ marginTop: '10px' }}>
        <input type="color" value={bgColor} onChange={changeBackgroundColor} />
      </div>
    </div>
    </>
  );
};

export default Canvas;