import React from "react";
import TeamInfo from "../../Elements/TeamInfo";

const Header = (props) => {

  return (
    <div>
        {props.teamData ? <TeamInfo team={props.teamData} /> : 'Loading...'}
    </div>
  );
}

export default Header;