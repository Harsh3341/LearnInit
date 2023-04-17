export default async (...args) => {
  const response = await fetch(...args);
  const json = await response.json();
  return json;
};
