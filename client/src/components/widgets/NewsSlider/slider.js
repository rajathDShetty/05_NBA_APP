import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates';
import { URL } from '../../../config';

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // axios.get(`${URL}/articles?_start=0&_end=3`)
        .then( response => {
            this.setState({
                news:response.data 
            })
        })
        .catch( e =>{
            console.log(e)
        })
    }

    render(){
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }

}

export default NewsSlider;