import {Component}  from "react";
import Header from "../components/header";

class Layout extends Component{
    
    render(){
        return(
            <div>
                <Header />
                {this.props.children}
                <footer> footer</footer>
            </div>
        );
    }
}

export default Layout;