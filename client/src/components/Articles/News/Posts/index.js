import React , {useEffect, useState} from "react";
import axios from "axios";
import { URL } from "../../../../config";
import { useParams } from 'react-router-dom';
import Header from "./Header";

function NewsArticles( props) {
    let [article, setArticle] = useState(null); 
    let [team, setTeam] = useState(null); 
    const params = useParams();
  
    useEffect(() => {
    async function fetchUsers() {
        await axios.get(`${URL}/articles/${params.id}`).then(async  response => {
        let article = response.data;
        await axios.get(`${URL}/teams/${article.team}`).then(response => {
        let team = response.data;
        setArticle(article);
        setTeam(team);
    }).catch(error => {
        console.log(error);
    });
    }).catch(error => {
        console.log(error);
    });
    }

    fetchUsers();
  }, [params.id]);

  return (<div>
    <Header 
                    teamData={team? team : 'Loading...'}
                    date={article ? article.date : 'Loading...'}
                    author={article ? article.author : 'Loading...'} 
                    />
    <div className='articleBody'>
                    <h1>{article? article.title : 'Loading...'}</h1>
                    <div className='articleImage'
                        style={{
                            background:`url('/images/articles/${article? article.image : 'article-placeholder.png'}')`
                        }}
                    ></div>
                    <div className='articleText'>
                        {article? article.body : 'Loading...'}
                    </div>
                </div>
  </div>
  );
}

export default NewsArticles;