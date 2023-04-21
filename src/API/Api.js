/* eslint-disable no-console */
const get = async (url, queryParams) => {
  const query = Object.keys(queryParams)
    .map(
      (k) => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`,
    )
    .join('&');
  const response = await fetch(`${url}?${query}`);
  return response.json();
};
const readPdf = async (link) => {
  const response = await fetch(link);
  const textResponse = response.text();
  return textResponse;
};

export default { get, readPdf };
