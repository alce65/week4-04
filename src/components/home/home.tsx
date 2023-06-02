import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

export default function Home() {
  const [count, setCount] = useState(0);

  console.log("Soy App", count);

  return (
    <section>
      <h2>Home</h2>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            // setCount((count) => count + 1)
            setCount(count + 1);
            // console.log(count);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  );
}
