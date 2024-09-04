import React, { useState, useRef } from "react";
import { SketchPicker } from 'react-color';

function ColorPicker() {
  const [color, setColor] = useState({ r: 16, g: 92, b: 15 });
  const canvasRef = useRef(null);

  const handleChangeComplete = (newColor) => {
    setColor(newColor.rgb);
  };

  const handleButtonClick = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      width: '100vw', 
      position: 'absolute', 
      top: 0, 
      left: 0 
    }}>
      <canvas 
        ref={canvasRef} 
        width={500} 
        height={500} 
        style={{ border: '1px solid #000' }} 
      />
      <SketchPicker 
        color={color} 
        onChangeComplete={handleChangeComplete} 
        style={{ marginTop: '20px' }}
      />
      <button onClick={handleButtonClick} style={{ marginTop: '20px' }}>
        Применить цвет
      </button>
    </div>
  );
}

export default ColorPicker;
