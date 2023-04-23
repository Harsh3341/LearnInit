import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const Quiz: NextPageWithLayout = () => {
  return (
    <>
      <h1>Quiz Page</h1>
    </>
  );
};

Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quiz;
