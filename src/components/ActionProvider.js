/* eslint-disable camelcase */
import Api from '../API/Api';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleHello = () => {
    const botMessage = this.createChatBotMessage('Hello. Nice to meet you.');
    this.addMessageToState(botMessage);
  };

  handleQuery = async (uuid_number, query_string) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, this.createChatBotMessage("I'll see what I can find", {
        withAvatar: true,
        delay: 100,
      })],
    }));
    const url = 'https://api.jugalbandi.ai/query-with-langchain-gpt4';
    const params = {
      uuid_number,
      query_string,
    };
    const response = await Api.get(url, params);
    const botMessage = this.createChatBotMessage(response.answer, {
      withAvatar: true,
    });

    this.addMessageToState(botMessage);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//   const handleHello = () => {
//     const botMessage = createChatBotMessage('Hello. Nice to meet you.');

//     setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//     }));
//   };

//   const handleQuery = async (uuid_number, query_string) => {
//     setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, createChatBotMessage("I'll see what I can find", {
//         withAvatar: true,
//         delay: 100,
//       })],
//     }));
//     const url = 'https://api.jugalbandi.ai/query-with-langchain-gpt4';
//     const params = {
//       uuid_number,
//       query_string,
//     };
//     const response = await Api.get(url, params);
//     const botMessage = createChatBotMessage(response.answer, {
//       withAvatar: true,
//     });

//     setState((prev) => ({
//       ...prev,
//       messages: [...prev.messages, botMessage],
//     }));
//   };

//   return (
//     <div>
//       {React.Children.map(children, (child) => React.cloneElement(child, {
//         actions: {
//           handleHello,
//           handleQuery,
//         },
//       }))}
//     </div>
//   );
// };

// export default ActionProvider;
