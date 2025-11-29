import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //jsx denilen kısım react {} içinde js kodu yazmamızı sağlar

  // değişken tanımlama kısımları return öncesinde yapılır

  const [count, setCount] = useState(0);
  let list = ["ali", "veli", "deli"];
  let not1 = 30;
  let not2 = 70;
  return (
    <div div>
      <h1>Jsx Giriş</h1>
      {list.map((name, index) => (
        <div
          //style tanımlamalarında ilk {} jsx için 2. si ise css için
          style={{
            backgroundColor: 'orange',
            border: '2px solid black',
            borderRadius: '10px',
          }}
          key={index}>
          {name}
        </div>
      ))}

      {(not1 + not2) / 2 >= 50 ? (
        <h2>Geçtin tebriks</h2>
      ) : (
        <h2>Kaldın yeğen geçmiş olsun</h2>
      )}
    </div>
  );
}

export default App;
