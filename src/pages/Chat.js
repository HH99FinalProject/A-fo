import React, { useState } from "react";
import io from 'socket.io-client';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GrPowerReset } from 'react-icons/gr';

import { Header } from "../components/core";
import MyChats from "../components/core/MyChats";
import { Button, Div, Text } from "../components/ui";

const socket = io.connect('http://3.34.98.41', { path: '/socket.io' });

const Chat = () => {

  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  const [join, setJoin] = useState('');
  const [showChat, setShowChat] = useState(false);

  const isLogin = useSelector((state) => state.login.isLogin);
  const userInfo = useSelector((state) => state.login.userInfo);
  React.useEffect(() => {
    if (isLogin) {
      setUserName(userInfo.userName);
      setRoom(userInfo.userId);
    }
  }, []);

  const joinRoom = () => {
    if (userName !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };
  const onLeaveRoom = () => {
    //on= 연결 , emit = 전송
    socket.emit('leave-room', room, () => setRoom(null));
    setTimeout(() => {
      window.location.pathname = '/';
    }, 1000);
  };

  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <Div width="30%" borderRight="1px solid #0031de">
          <Div height="86px" backgroundColor="#4378ff" center row>
            <Text size="24px" color="#fff" letterSpacing="0.1em">메세지</Text>
            <GrPowerReset size="25" style={{margin:"0 5px", cursor:"pointer"}}/>
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

        <Div width="70%">
          <Div height="80%" borderBottom="1px solid #0031de" padding="40px 30px">
            대화내용 들어올곳
            {!showChat ? (
              <div className="joinChatContainer">
                <h3>채팅방 참여하기</h3>
                <input
                  type="text"
                  placeholder="John..."
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>메세지 보내기</button>
              </div>
            ) : (
              <Chat
                socket={socket}
                username={userName}
                room={room}
                onLeaveRoom={onLeaveRoom}
              />
            )}
          </Div>
          <Div spaceBetween height="20%" padding="40px" backgroundColor="#fff">
            <Textarea />
            <Button backgroundColor="#fff" color="#0031de" bold size="24px">보내기</Button>
          </Div>
        </Div>
      </Wrap>
    </React.Fragment>
  )
}

export default Chat;


const Wrap = styled.div`
  display: flex;
  width: 1400px;
  height: 91vh;
  margin: 0 auto;
  border: 1px solid #0031de;
  border-top: none;
`;

const EllipsisName = styled.div`
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
  color: #0031de;
  font-size: 16px;
`;

const EllipsisContent = styled.div`
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  border: none;
  font-family: inherit;
  resize: none;
  width: 85%;
  height: 100px;
  padding: 10px;
  font-size: 18px;
  border-radius: 0;
`;