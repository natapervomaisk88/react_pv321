// import { useState,useRef} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import ColorPicker from './components/ColorPicker';
// function App() {
//     // const [name, setName] = useState("default");

//     // const handleChange = (event) => {
//     //     setName(event.target.value);
//     // };

//     // const handleAlert = () => {
//     //     alert(name);
//     // };

//     return (
//         <>
//             {/* <p>Name: {name}</p>
//             <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> */}
//              <div>
              
//               <ColorPicker />
//             </div>
//         </>
//     );
// }

// export default App;
import React from 'react';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div>
      <ColorPicker />
    </div>
  );
}

export default App;
