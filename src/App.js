import { Component } from "react";
import Fullscreen from "./Components/Fullscreen";
import Carousel from "./Function/Carousel";
import Download from "./Components/Download";
import Back from "./Components/Back"
import { ColorExtractor } from "react-color-extractor";

const image = require("./wallpaper/Evelynn.png");

class App extends Component {

  state = ({ background_color: '#000' })

  updateState = (event) => {

    console.log(event.background_color)


    this.setState({
      background_color: event.background_color
    });
  };

  render() {
    return (
      <div className="relative" >
        <Back background_color={this.state.background_color}></Back>
        <div id="page" className='w-full h-screen relative'>
          <ColorExtractor
            getColors={colors =>
              this.updateState({ background_color: colors[0] })}
          >
            <img onMouseDown={Carousel} onMouseUp={Carousel} id="current-wallpaper" src={image} className="h-full w-full bg-cover"></img>
          </ColorExtractor>
          <Fullscreen />
          <Download source={image} />
        </div>
      </div >
    );
  }
}
export default App;


