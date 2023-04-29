interface QuestionsProps {
  question: String;
  answers: Record<string, any>;
  correct_answer: String;
  tags?: Record<string, any>;
  category?: String;
  difficulty?: String;
}

const Questions: React.FC<QuestionsProps> = ({
  question,
  answers,
  correct_answer,
  tags,
  category,
  difficulty,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-left px-8">{question}</h1>
        </div>
        <div className="w-3/4">
          <ul className="list-none">
            {Object.entries(answers).map(([key, value]) => {
              if (value === null) {
                return;
              }
              return (
                <li
                  key={key}
                  className="flex flex-row justify-start gap-4 border-2 border-neutral-500 rounded-2xl p-4 my-4"
                >
                  <input type="radio" name="answer" value={key} />
                  <p>{value}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Questions;
