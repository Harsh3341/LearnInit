import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import quiz from "@/libs/quiz";
import QuizFeed from "@/components/QuizFeed";

interface QuizProps {
  quizData: any;
}

const Quiz: NextPageWithLayout<QuizProps> = ({ quizData }) => {
  return (
    <>
      <QuizFeed quizData={quizData} />
    </>
  );
};

Quiz.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quiz;

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  const quizData = await quiz();

  if (!quizData) {
    return {
      notFound: true,
    };
  }

  if (!session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: { session, quizData },
  };
}
