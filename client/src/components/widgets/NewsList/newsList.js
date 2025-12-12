import axios from "axios";
import React, {Component} from "react";

import { Link } from  'react-router-dom';
import { URL } from "../../../config";
import Button from  './buttons';
import CardInfo from './cardInfo';
import "../../../css/newsList.css";

class NewsList extends Component {
    state ={
        teams: [],
        items: [], 
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }
    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams:response.data
                })
            })
        }


        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items,...response.data],
                start,
                end
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }
    renderNews = ( type ) => {
        let template = null;

        switch(type){
            case('card') : 
                template = this.state.items.map( (item,i) => {
                    return (
                        <div
                            className= {"newsList_wrapper"}
                            timeout={500}
                            key={i}
                        >
                            <div>
                                <div className="newslist_item">
                                    <Link to={`/articles/${item.id}`}>
                                        <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                        <h2>{item.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            break;
            case('cardMain'):
                template = this.state.items.map((item,i) => (
                    <div
                            className= "newsList_wrapper"
                            timeout={500}
                            key={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className= 'flex_wrapper'>
                                <div className= 'left'
                                    style={{
                                        background:`url('/images/articles/${item.image}')`
                                    }}>
                                    <div></div>
                                </div>
                                <div className= 'right'>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            break;
            default:
                template = null;
        }
        return template;
    }
    render(){
        return (
            <div>
                <div className="list">
                    { this.renderNews( this.props.type )}
                </div>
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />
            </div>
        );
    }
}

export default NewsList;