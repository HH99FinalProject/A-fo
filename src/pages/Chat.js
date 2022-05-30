import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ScrollToBottom from 'react-scroll-to-bottom';
import io from 'socket.io-client';
import { history } from '../redux/configureStore';

import { Header, MyChats } from '../components/core';

import styled from 'styled-components';
import { GrPowerReset } from 'react-icons/gr';
import { Button, Div, Text } from '../components/ui';

const socket = io.connect('https://a-fo-back.shop', { path: '/socket.io' });

const Chat = (props) => {
  const location = useLocation();
  const isLogin = useSelector((state) => state.login.isLogin);
  const userInfo = useSelector((state) => state.login.userInfo);
  const [username, setUsername] = React.useState('');
  const [room, setRoom] = React.useState('');
  const targetAuthor = location.state.targetAuthor;
  const targetAuthorId = location.state.targetAuthorId;

  React.useEffect(() => {
    if (isLogin) {
      setUsername(userInfo.userName);
      setRoom(Number(userInfo.userId) + Number(targetAuthorId));
      socket.emit('join_room', room);
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
          <Div
            height="86px"
            backgroundColor="#4378ff"
            center
            row
            borderBottom="1px solid #0031de"
          >
            <Text size="24px" color="#fff" letterSpacing="0.1em">
              메세지
            </Text>
            <GrPowerReset
              size="25"
              style={{ margin: '0 5px', cursor: 'pointer' }}
            />
          </Div>
          <Div overflow="auto" height="90%">
            {/* map으로 돌려야함 */}
            {/* 채팅리스트.map((v, i) => { return <Mychats /> }) */}
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
            <MyChats />
          </Div>
        </Div>

        <ChatBox>
          <Div width="100%" height="40px">
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
          <Div position="relative" height="100%">
            <div className="chat-body">
              <ScrollToBottom className="message-container">
                {messageList.map((messageContent, i) => {
                  return (
                    <Box
                      key={messageContent + i}
                      id={username === messageContent.author ? 'you' : 'other'}
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
              </ScrollToBottom>
            </div>
          </Div>
          <Div
            spaceBetween
            position="absolute"
            bottom="0"
            right="0"
            width="70%"
            height="20%"
            padding="40px"
            backgroundColor="#fff"
            borderTop="1px solid #0031de"
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
            <Button
              backgroundColor="#fff"
              color="#0031de"
              bold
              size="24px"
              _onClick={sendMessage}
            >
              보내기
            </Button>
          </Div>
        </ChatBox>
      </Wrap>
    </React.Fragment>
  );
};

export default Chat;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 1400px;
  height: 91vh;
  margin: 0 auto 100px auto;
  border: 1px solid #0031de;
  border-top: none;
`;

const ChatBox = styled.div`
  float: right;
  width: 71%;
  height: 80%;

  .chat-body {
    position: relative;
    height: calc(780px - (45px + 70px));

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
  height: auto;
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
