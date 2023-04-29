import Questions from "@/components/Questions";
import Button from "@/components/Button";
import { useCallback, useEffect, useState } from "react";

interface QuizFeedProps {
  quizData: any;
}

const QuizFeed: React.FC<QuizFeedProps> = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log(quizData);

  const handleNext = useCallback(() => {
    setCurrentQuestion(currentQuestion + 1);
  }, [currentQuestion]);

  const handleBack = useCallback(() => {
    setCurrentQuestion(currentQuestion - 1);
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion >= quizData.length - 1) {
      setCurrentQuestion(0);
    }
  }, [currentQuestion, quizData.length]);

  return (
    <div className="h-min rounded-3xl p-4 flex flex-col gap-4">
      <h1>Select an answer</h1>

      <Questions
        key={quizData[currentQuestion].id}
        question={quizData[currentQuestion].question}
        answers={quizData[currentQuestion].answers}
        correct_answer={quizData[currentQuestion].correct_answer}
        tags={quizData[currentQuestion].tags}
        category={quizData[currentQuestion].category}
        difficulty={quizData[currentQuestion].difficulty}
      />

      <div className="flex justify-center gap-4">
        <Button label="Back" onClick={handleBack} />
        <Button label="Next" secondary onClick={handleNext} />
      </div>
    </div>
  );
};

export default QuizFeed;
