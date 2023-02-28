const image = require("./wallpaper/shadow.jpeg");
function App() {
  return (
    <div className='w-full h-screen'>
      <img src={image} className="h-full w-full bg-cover"></img>
    </div>
  );
}

export default App;
