import CategoriesBar from "@/components/layout/CategoriesBar";
import PostFeed from "@/components/videos/PostFeed";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "@/components/Layout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CategoriesBar />
      <PostFeed />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
