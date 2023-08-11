
import './App.css';
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import {useEffect, useState} from "react";
import axios from "axios";
import Special from "./components/special";
import Latest from "./components/latest";
import Upcomming from "./components/upcomming";
import LatestSeries from "./components/latestSeries";
import Hottest from "./components/hottest";
import Recommend from "./components/recommend";

function App() {

    const [posts, setPosts] = useState([]);

    Slider.defaultProps = {
        sliderData: []
    };

    useEffect(() => {
        axios.get('https://cdn.playco.tv/api/data/home')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    // console.log(posts)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
          <Slider sliderData={posts.data?.slider}/>
          <Special specialData={posts.data?.special}/>
          <Latest latestData={posts.data?.latest} />
          <Hottest hottestData={posts.data?.hottest} />
          <Upcomming upcommingData={posts.data?.upcomming} />
          <LatestSeries latestSeriesData={posts.data?.latestSeries} />
          <Recommend recommendData={posts.data?.recommend} />
      </header>
    </div>
  );
}

export default App;
