import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import PostCard from "../components/PostCard";

const SavedPostPages = () => {
  return (
    <Layout>
      <Card>
        <div className="font-bold text-gray-600">Saved Posts</div>
      </Card>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  );
};

export default SavedPostPages;
