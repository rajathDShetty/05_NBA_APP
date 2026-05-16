import React , {useEffect , useState} from "react";
import axios from "axios";
import { URL } from "../../../../config";
import { useParams } from 'react-router-dom';
import Header from "./Header";
import VideosList from "../../../widgets/VideosList/videosList";

const Video = () => {
    let [article, setArticle] = useState(null); 
    let [team, setTeam] = useState(null); 
    // let [teams, setTeams] = useState(null); 
    // let [related, setRelated] = useState(null); 

    const params = useParams();

    useEffect(() => {
    async function fetchUsers() {
        await axios.get(`${URL}/videos/${params.id}`)
        .then( async  response => {
            let article = response.data;

            await axios.get(`${URL}/teams/${article.team}`)
            .then( async response => {
                const team = response.data;
                setArticle(article);
                setTeam(team);
                // await this.getRelated();
            })
        })
    }

    fetchUsers();
  }, [params.id]);

//   getRelated = () => {
       
//         axios.get(`${URL}/teams`)
//         .then( response =>{
//             let teams = response.data

//             axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
//             .then( response =>{
//                 this.setState({
//                     teams,
//                     related:response.data
//                 })
//             })
//         })
//     }

    return (
        <div> 
            <Header teamData={team}/>    
            <div className='videoWrapper'>
                    <h1>{article ? article.title : 'Loading...'}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article ? article.url.split('=')[1] : 'Loading...'}`}
                    >
                    </iframe>
                </div>
                <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={6}
                />
        </div>
    );
}

export default Video;