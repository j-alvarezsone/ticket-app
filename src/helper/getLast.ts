export const getLast = async () => {
  const resp = await fetch(process.env.REACT_APP_BASE_URL!);
  const data = await resp.json();

  return data.last;
};
