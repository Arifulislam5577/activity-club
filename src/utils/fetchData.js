async function fetchData(url) {
  const res = await fetch(url);
  const result = await res.json();
  return result;
}

export default fetchData;
