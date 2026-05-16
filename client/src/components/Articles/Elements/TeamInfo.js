import React from "react";
import "../../../css/article.css";

const TeamInfo = (props) => {
    return (
        <div className='articleTeamHeader'>
        <div className='left'
            style={{
                background:`url('/images/teams/${props.team.logo? props.team.logo : 'team-placeholder.png'}')`
            }}
        >
        </div>
        <div className='right'>
            <div>
                <span>{props.team.city? props.team.city : 'Loading...'} {props.team.name ? props.team.name : 'Loading...'}</span>
            </div>
            <div>
                <strong>
                    W{props.team !== 'Loading...'? props.team.stats[0].wins : 'Loading...'}-L{props.team !== 'Loading...'? props.team.stats[0].defeats : 'Loading...'}
                </strong>
            </div>
        </div>
    </div>
    );
}

export default TeamInfo;