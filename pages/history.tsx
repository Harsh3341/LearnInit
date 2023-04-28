import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
