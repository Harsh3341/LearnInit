import CategoriesBar from "@/components/layout/CategoriesBar";
import PostFeed from "@/components/videos/PostFeed";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const Home: NextPageWithLayout = () => {
  const [active, setActive] = useState("all");

  const handleActive = (active: string) => {
    setActive(active);
  };

  return (
    <>
      <CategoriesBar activeCategory={handleActive} active={active} />
      <PostFeed active={active} />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
