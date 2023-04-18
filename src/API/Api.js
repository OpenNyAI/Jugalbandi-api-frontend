const get = async (url, queryParams) => {
  console.log(url, queryParams);
  const query = Object.keys(queryParams)
    .map(
      (k) => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`,
    )
    .join('&');
  const response = await fetch(`${url}?${query}`);
  console.log(response);
  return response.json();
};

export default { get };
