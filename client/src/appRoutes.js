import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import NewsArticle from "./components/Articles/News/Posts/index";
import Layout from "./hoc/layout";
import Video from "./components/Articles/Videos/Video/index";
import NewsMain from "./components/Articles/News/main/index";
import VideoMain from "./components/Articles/Videos/main/index";

const AppRoutes = () => {
    return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<NewsMain />} />
                    <Route path="/articles/:id" element={<NewsArticle />} />
                    <Route path="/videos/:id" element={<Video />} />
                    <Route path="/videos" element={<VideoMain />} />
                </Routes>
            </Layout>
    );
};

export default AppRoutes;
