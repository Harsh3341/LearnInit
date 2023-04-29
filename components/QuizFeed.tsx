import Questions from "@/components/Questions";
import Button from "@/components/Button";

interface QuizFeedProps {
  quizData: any;
}

const QuizFeed: React.FC<QuizFeedProps> = ({ quizData }) => {
  const testData = {
    id: 277,
    question: "In WordPress, objects are passed by value or by reference.",
    description: null,
    answers: {
      answer_a: "In WordPress, all objects are passed by value.",
      answer_b: "In WordPress, all objects are passed by reference.",
      answer_c: null,
      answer_d: null,
      answer_e: null,
      answer_f: null,
    },
    multiple_correct_answers: "false",
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
      answer_e_correct: "false",
      answer_f_correct: "false",
    },
    correct_answer: "answer_a",
    explanation: null,
    tip: null,
    tags: [
      {
        name: "WordPress",
      },
    ],
    category: "CMS",
    difficulty: "Medium",
  };
  return (
    <div className="h-min rounded-3xl p-4 flex flex-col gap-4">
      <h1>Select an answer</h1>
      <Questions
        key={testData.id}
        question={testData.question}
        answers={testData.answers}
        correct_answer={testData.correct_answer}
        tags={testData.tags}
        category={testData.category}
        difficulty={testData.difficulty}
      />
      <div className="flex justify-center gap-4">
        <Button label="Back" onClick={() => {}} />
        <Button label="Next" secondary onClick={() => {}} />
      </div>
    </div>
  );
};

export default QuizFeed;
