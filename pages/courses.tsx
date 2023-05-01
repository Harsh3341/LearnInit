import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect, useState } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

const History: NextPageWithLayout = () => {
  return <>Coming soon...</>;
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
