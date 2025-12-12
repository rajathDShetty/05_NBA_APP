import { Component } from "react";
import Slider from "./widgets/NewsSlider/slider";
import NewsList from "./widgets/NewsList/newsList";
import VideosList from "./widgets/VideosList/videosList";

class Home extends Component{
    render(){
        return(
            <div>
                <Slider 
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
                 />
                <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
                />
                <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
                />
            </div>
        );
    }
}

export default Home;