import Api from '../API/Api';

/* eslint-disable camelcase */
const getChatbotResponse = async (uuid_number, query_string) => {
  const url = 'https://api.jugalbandi.ai/query-with-langchain-gpt3-5';
  const params = {
    uuid_number,
    query_string,
  };
  const response = await Api.get(url, params);
  return response;
};

export default { getChatbotResponse };
