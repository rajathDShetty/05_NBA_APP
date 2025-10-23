import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import SideNavItem from './sideNav_iteams';
import '../../css/sideNavIteams.css';

export default function SideNav(props) {

  return (
    <>
      <Drawer PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
          },
        }}
        anchor="left" open={props.showNav} onClose={() => props.onHideNav()}>
        <div style={{ width: 200, padding: 20 }}>
            <SideNavItem /> 
        </div>
      </Drawer>
    </>
  );
}
