import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Layout from "./hoc/layout";

const AppRoutes = () => {
    return (
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<Home />} />
                    <Route path="/articles/:id" element={<Home />} />
                    <Route path="/videos/:id" element={<Home />} />
                    <Route path="/videos" element={<Home />} />
                </Routes>
            </Layout>
    );
};

export default AppRoutes;
