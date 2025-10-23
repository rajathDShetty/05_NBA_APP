import {Component}  from "react";
import Header from "../components/header";

class Layout extends Component{
    
    state ={
        showNav : false
    }

    toggleSidenav = (event) => {
        this.setState({
            showNav: event
        });
    }

    render(){
        return(
            <div>
                <Header 
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                    />
                {this.props.children}
                <footer> footer</footer>
            </div>
        );
    }
}

export default Layout;