import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';
import { history } from '../redux/configureStore';
import { getChatListDB, getDetailDB } from '../redux/modules/chat';

import { Header, MyChats } from '../components/core';

import styled from 'styled-components';
import { GrPowerReset } from 'react-icons/gr';
import { Button, Div, Text } from '../components/ui';

const socket = io.connect('https://a-fo-back.shop', { path: '/socket.io' });

const Chat = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userId = useSelector((state) => state.login.userInfo.userId);
  const userInfo = useSelector((state) => state.login.userInfo);
  const userName = useSelector((state) => state.login.userInfo.userName);
  const [username, setUsername] = React.useState('');
  const [room, setRoom] = React.useState('');
  const targetAuthor = location.state?.targetAuthor;
  const targetAuthorId = location.state?.targetAuthorId;
  const authorId = userId;

  console.log(targetAuthor);

  const chatList = useSelector((state) => state.chat.chatList);
  const isChat = chatList.findIndex((i) => i.targetAuthorId === targetAuthorId);
  console.log(isChat);
  const DMList = useSelector((state) => state.chat.DMList);

  React.useEffect(() => {
    // 기존 채팅유무 확인
    if (chatList[isChat]) {
      // 기존채팅이 있으면 리스트로 뿌려주고
      dispatch(getChatListDB(authorId));
      setUsername(userInfo.userName);
      setRoom(chatList[isChat]?.room);
      console.log(chatList);
      socket.emit('join_room', room);
      dispatch(getDetailDB(chatList[isChat]?.room));
    } else {
      // 없으면 새로 방만들고
      setUsername(userInfo.userName);
      setRoom(Number(userInfo.userId) + Number(targetAuthorId));
      socket.emit('join_room', room);
      dispatch(getChatListDB(authorId));
      console.log('gg');
    }
  }, []);

  const onLeaveRoom = () => {
    socket.emit('leave-room', room, () => setRoom(null));
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  const [currentMessage, setCurrentMessage] = React.useState('');
  const [messageList, setMessageList] = React.useState([]);

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        authorId: userInfo.userId,
        targetAuthor: targetAuthor,
        targetAuthorId: targetAuthorId,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket?.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
    dispatch(getChatListDB(authorId));
  };

  const _sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: DMList[0]?.room,
        author: username,
        authorId: userInfo.userId,
        targetAuthor: DMList[0]?.targetAuthor,
        targetAuthorId: DMList[0]?.targetAuthorId,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket?.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
    dispatch(getChatListDB(authorId));
  };

  React.useEffect(() => {
    socket?.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <Div
          float="left"
          width="30%"
          borderRight="1px solid #0031de"
          backgroundColor="white"
        >
          <Div height="88px" backgroundColor="#4378ff" center row>
            <Text size="24px" color="#fff" letterSpacing="0.1em">
              메세지
            </Text>
            <GrPowerReset
              size="25"
              style={{ margin: '0 5px', cursor: 'pointer' }}
              onClick={() => {
                dispatch(getChatListDB(authorId));
              }}
            />
          </Div>
          <Div overflow="auto" height="90%">
            {/* map으로 돌려야함 */}
            {chatList.map((chat, i) => {
              return <MyChats key={chat + i} chat={chat} />;
            })}
          </Div>
        </Div>

        {/* <DefaultBox>메세지를 클릭해주세요!</DefaultBox> */}

        <ChatBox>
          <Div
            width="100%"
            height="40px"
            backgroundColor="#9FBAFF"
            spaceBetween
          >
            <Div width="100%" center height="100%">
              {/* {isChat === -1 ? null
              : <Div color="#fff">{targetAuthor}님과의 대화방에 참여하셨습니다.</Div>
              } */}
              {targetAuthorId ? (
                <Div color="#fff">
                  {targetAuthor}님과의 대화방에 참여하셨습니다.
                </Div>
              ) : (
                <Div color="#fff">
                  {DMList[0]?.targetAuthor}님과의 대화방에 참여하셨습니다.
                </Div>
              )}
            </Div>
            <Div>
              <Button
                float="right"
                width="80px"
                height="40px"
                backgroundColor="#4378ff"
                color="#fff"
                _onClick={onLeaveRoom}
              >
                나가기
              </Button>
            </Div>
          </Div>
          <Div height="100%" backgroundColor="#9FBAFF">
            <div className="chat-body">
              <ScrollToBottom className="message-container">
                {chatList[isChat] ? (
                  <>
                    <Box>
                      <div>
                        {DMList?.map((v, i) => {
                          return (
                            <>
                              <div className="message-content">
                                <p>{v.message}</p>
                              </div>
                              <div className="message-meta">
                                <p id="time">{v.udatedAt}</p>
                                <p
                                  style={{
                                    marginLeft: '10px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {v.author}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </Box>
                    {messageList.map((messageContent, i) => {
                      return (
                        <Box
                          key={messageContent + i}
                          id={
                            username === messageContent.author ? 'you' : 'other'
                          }
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                              <p id="time">{messageContent.time}</p>
                              <p
                                style={{
                                  marginLeft: '10px',
                                  fontWeight: 'bold',
                                }}
                              >
                                {messageContent.author}
                              </p>
                            </div>
                          </div>
                        </Box>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <Box>
                      <div>
                        {DMList?.map((v, i) => {
                          return (
                            <>
                              <div className="message-content">
                                <p>{v.message}</p>
                              </div>
                              <div className="message-meta">
                                <p id="time">{v.udatedAt}</p>
                                <p
                                  style={{
                                    marginLeft: '10px',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  {v.author}
                                </p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </Box>
                    {messageList.map((messageContent, i) => {
                      return (
                        <Box
                          key={messageContent + i}
                          id={
                            username === messageContent.author ? 'you' : 'other'
                          }
                        >
                          <div>
                            <div className="message-content">
                              <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                              <p id="time">{messageContent.time}</p>
                              <p
                                style={{
                                  marginLeft: '10px',
                                  fontWeight: 'bold',
                                }}
                              >
                                {messageContent.author}
                              </p>
                            </div>
                          </div>
                        </Box>
                      );
                    })}
                  </>
                )}
              </ScrollToBottom>
            </div>
          </Div>
          <Div
            spaceBetween
            width="100%"
            padding="40px"
            backgroundColor="#fff"
            // borderTop="1px solid #0031de"
          >
            <Input
              type="text"
              value={currentMessage}
              placeholder="메시지를 입력하세요."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === 'Enter' && sendMessage();
              }}
            />
            {!chatList[isChat] && !targetAuthorId ? (
              <Button
                backgroundColor="#fff"
                color="#0031de"
                bold
                size="24px"
                _onClick={() => {
                  _sendMessage();
                }}
              >
                보내기
              </Button>
            ) : (
              <Button
                backgroundColor="#fff"
                color="#0031de"
                bold
                size="24px"
                _onClick={() => {
                  sendMessage();
                }}
              >
                보내기
              </Button>
            )}
          </Div>
        </ChatBox>
      </Wrap>
    </React.Fragment>
  );
};

export default Chat;

const Wrap = styled.div`
  display: flex;
  width: 1400px;
  height: 91vh;
  margin: 0 auto;
  border: 1px solid #0031de;
  border-top: none;
  background-color: white;
`;

const ChatBox = styled.div`
  width: 71%;
  height: 600px;

  .chat-body {
    /* border: 1px solid blue; */
    height: 100%;

    .message-container {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .message-container::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Box = styled.div`
  /* height: auto; */
  padding: 10px;
  display: flex;
  .message-content {
    width: auto;
    height: auto;
    min-height: 40px;
    max-width: 120px;
    background-color: #0031de;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  #you {
    justify-content: flex-end;
  }
  #you .message-content {
    justify-content: flex-end;
  }
  #other {
    justify-content: flex-start;
  }
  #other .message-content {
    justify-content: flex-start;
    background-color: cornflowerblue;
  }
`;

const Input = styled.input`
  border: none;
  font-family: inherit;
  resize: none;
  width: 85%;
  height: 100px;
  padding: 10px;
  font-size: 18px;
  border-radius: 0;
`;
