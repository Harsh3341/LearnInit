import axios from "axios";

const quiz = async () => {
  const url = `https://quizapi.io/api/v1/questions?apiKey=${process.env.QUIZ_API_KEY}`;

  const response = await axios.get(url);
  const json = await response.data;

  if (!json) {
    return {
      error: "No data found",
    };
  }

  return json;
};

export default quiz;
