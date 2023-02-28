import Fullscreen from "./Components/Fullscreen";
function App() {

  const image = require("./wallpaper/shadow.jpeg");



  return (
    <div className='w-full h-screen relative'>
      <img id="current-wallpaper" src={image} className="h-full w-full bg-cover"></img>
      <Fullscreen />
    </div>
  );
}

export default App;


