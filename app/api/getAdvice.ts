const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch advice data");
  }
  return res.json();
};

export default getAdvice;
