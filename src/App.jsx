import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navee from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import Audioo from "./AudioRecorder";
import Listen from "./Listen";

function App() {
  return (
    <>
      <Navee />
      {/* <Audioo /> */}
      <Listen />
      {/* <AudioPlayer /> */}
    </>
  );
}

export default App;
