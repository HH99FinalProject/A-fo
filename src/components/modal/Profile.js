import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../../redux/configureStore';

import MyPage from '../../pages/MyPage';
import { Button, Div, Image, Input, Text } from '../ui';
import { VscChromeClose } from 'react-icons/vsc';
import plus from '../../styles/images/plus.png';

const Profile = ({ onClose }) => {
  const fileInput = React.useRef(null);
  const selectFile = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {};
  };
  // const isUploading = useSelector((state) => state.image.uploading);

  return (
    <React.Fragment>
      <Div width="500px">
        <Div
          spaceBetween
          width="100%"
          padding="40px 20px 0px 40px"
          border="1px solid black"
        >
          <Text size="24px" bold>
            내 정보
          </Text>
          <Button _onClick={onClose}>
            <VscChromeClose size="30px" />
          </Button>
        </Div>
        <Div
          width="100%"
          margin="30px 0px "
          padding="0px 40px"
          border="1px solid black"
        >
          <Div padding="10px 0px" border="1px solid black">
            <Text float="left" width="100px" display="inline-block">
              프로필 사진
            </Text>
            <Div
              center
              display="inline-block"
              float="lef"
              width="150px"
              height="150px"
              border="1px solid black"
            >
              <label htmlFor="file">
                <Image
                  shape="circle"
                  display="inline-block"
                  width="65px"
                  height="65px"
                  src={plus}
                  size="contain"
                  repeat="no-repeat"
                  position="center"
                  cursor="pointer"
                  border="1px solid black"
                />
              </label>
              <input
                id="file"
                type="file"
                onChange={selectFile}
                ref={fileInput}
                // disabled={isUploading}
                style={{
                  display: 'none',
                }}
              />
            </Div>
          </Div>
          <Div padding="10px 0px" border="1px solid black">
            <Input
              file
              placeholder="이름"
              // value={name}
              // _onChange={changeName}
              label="이름"
              width="250px"
            />
          </Div>
          <Div padding="10px 0px" border="1px solid black">
            <Input
              file
              textarea
              placeholder="소개"
              // value={name}
              // _onChange={changeName}
              label="소개"
              width="250px"
              height="100px"
            />
          </Div>
        </Div>
        <Div center width="100%" height="50px" border="1px solid black">
          <Button _onClick={onClose}>프로필 저장</Button>
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Profile;
