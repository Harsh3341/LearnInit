import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

const History: NextPageWithLayout = () => {
  return (
    <>
      <h1>History</h1>
    </>
  );
};

History.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default History;
