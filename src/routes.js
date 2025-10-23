import React, {Component}  from "react";
import  {createBrowserRouter , RouterProvider}  from "react-router-dom";

import Home from "./components/home";
import Layout from "./hoc/layout";


class Routes extends Component{
    routes = createBrowserRouter([
        {
            path: '/' ,
            element: <Home/>
        },
        {
            path: '/news' ,
            element: <Home/>
        },
        {
            path: '/articles/:id' ,
            element: <Home/>
        },
        {
            path: '/videos/:id' ,
            element: <Home/>
        },
        {
            path: '/videos' ,
            element: <Home/>
        },
    ]);

    render(){
        return(
            <Layout>
                <RouterProvider router={this.routes}/>
            </Layout>
        );
    }
}

export default Routes;