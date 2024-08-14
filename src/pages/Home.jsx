import React from "react";
import Layout from "../components/Layout";
import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";

const Home = () => {
  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  );
};

export default Home;
