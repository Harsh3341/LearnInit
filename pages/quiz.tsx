import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";

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
