import React, { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';
import { actionCreators as imageActions } from '../redux/modules/image';

import { Header } from '../components/core';
import { Text, Div, Button } from '../components/ui';
import { editPostDB } from '../redux/modules/board';
import { getPostRawDataDB } from '../redux/modules/board';
import { initialRawData } from '../redux/modules/board';

const PostDetailEdit = (props) => {
  const dispatch = useDispatch();

  const preview = useSelector((state) => state.image.preview);
  const token = useSelector((state => state.login.userInfo.token));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nation, setNation] = useState('');
  const [landPick, setLandPick] = useState('');
  const [purposePick, setPurposePick] = useState('');

  // 내가 선택한 대륙별선택
  const myLandPick = (e) => {
    console.log(e.target.value);
    setLandPick(e.target.value);
  };
  // 내가 선택한 목적별선택
  const myPurposePick = (e) => {
    console.log(e.target.value);
    setPurposePick(e.target.value);
  };

  const editPost = () => {
    if (!title && !nation && !content) {
      window.alert('내용을 수정해주세요!');
    } else {
      dispatch(editPostDB({formData, token}));
      window.alert('게시물 수정 완료!');
      history.push('/board');
    }
  };
  
  // params 값
  const postId = props.match.params.postId;
  
  // 이미지 전달할 코드
  const fileInput = useRef(null);
  const formData = new FormData();
  if (fileInput.current) {
    formData.append('title', title);
    formData.append('subTitle', nation);
    formData.append('content', content);
    formData.append('continent', landPick);
    formData.append('target', purposePick);
    formData.append('postId', postId);
    formData.append(
      'image',
      fileInput.current ? fileInput.current.files[0] : null
    );
  }

  // 이미지 프리뷰
  const changePreview = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.uploadImageDB(reader.result));
    };
  };

  const rawData = useSelector(state => state.board.rawData);
  console.log(postId, rawData);
  

  React.useEffect(()=>{
    dispatch(getPostRawDataDB(postId));

    // rawData 초기화시켜주기 (수정할때 데이터 한박자 늦음)
    return () => {
      dispatch(initialRawData());
    }
  }, [])

  return (
    <React.Fragment>
      <Header></Header>
      <Div
        width="1400px"
        margin="80px auto 50px"
        padding="20px 0"
        alignItems="center"
      >
        <ReturnBtn
          onClick={() => {
            history.push('/board');
          }}
        >
          목록으로
        </ReturnBtn>

        <Div margin="30px 0 0 0">
          <Article>
            <Div flexStart>
              <LandTarget>
                <Div>대륙별 선택</Div>
                <input
                  type="radio"
                  name="nation"
                  value="오세아니아"
                  id="btn1"
                  onClick={myLandPick}
                />
                <label htmlFor="btn1">오세아니아</label>
                <input
                  type="radio"
                  name="nation"
                  value="아시아"
                  id="btn2"
                  onClick={myLandPick}
                />
                <label htmlFor="btn2">아시아</label>
                <input
                  type="radio"
                  name="nation"
                  value="유럽"
                  id="btn3"
                  onClick={myLandPick}
                />
                <label htmlFor="btn3">유럽</label>
                <input
                  type="radio"
                  name="nation"
                  value="북미"
                  id="btn4"
                  onClick={myLandPick}
                />
                <label htmlFor="btn4">북미</label>
                <input
                  type="radio"
                  name="nation"
                  value="남미"
                  id="btn5"
                  onClick={myLandPick}
                />
                <label htmlFor="btn5">남미</label>
              </LandTarget>
              <PurposeTarget>
                <Div>목적별 선택</Div>
                <input
                  type="radio"
                  name="purpose"
                  value="워홀"
                  id="btn6"
                  onClick={myPurposePick}
                />
                <label htmlFor="btn6">워홀</label>
                <input
                  type="radio"
                  name="purpose"
                  value="이민"
                  id="btn7"
                  onClick={myPurposePick}
                />
                <label htmlFor="btn7">이민</label>
                <input
                  type="radio"
                  name="purpose"
                  value="취업"
                  id="btn8"
                  onClick={myPurposePick}
                />
                <label htmlFor="btn8">취업</label>
                <input
                  type="radio"
                  name="purpose"
                  value="유학"
                  id="btn9"
                  onClick={myPurposePick}
                />
                <label htmlFor="btn9">유학</label>
              </PurposeTarget>
            </Div>
            <Div>
              <Nation
                placeholder="나라를 입력하세요."
                maxLength={10}
                defaultValue={rawData?.subTitle}
                onChange={(e) => {
                  setNation(e.target.value);
                }}
              />
            </Div>
            <Div position="relative">
              <Title
                placeholder="제목을 입력하세요."
                maxLength={30}
                defaultValue={rawData?.title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              {/* <div style={{position:"absolute", top:"40px", right:"15px", background: "#fff"}}>({titleCount}/30)</div> */}
            </Div>
            <Div position="relative">
              <Content
                overflow="auto"
                placeholder="내용을 입력하세요."
                maxLength={500}
                defaultValue={rawData?.content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <Div width="200px">
                <img
                  style={{
                    borderRadius: '20px',
                    width: '100%',
                    margin: '10px',
                  }}
                  src={preview ? preview : null}
                />
              </Div>
              <input
                style={{ fontSize: '15px' }}
                accept="image/*"
                type="file"
                ref={fileInput}
                onChange={changePreview}
                id="file"
              />
            </Div>
            <Div flexEnd>
              <Button
                padding="10px"
                border="1px solid #000"
                _onClick={() => {
                  editPost();
                }}
                backgroundColor="#fff"
              >
                변경하기
              </Button>
            </Div>
          </Article>
        </Div>
      </Div>
    </React.Fragment>
  )
}

export default PostDetailEdit;

const ReturnBtn = styled.button`
  float: right;
  padding: 10px;
  margin-right: 20px;
  background: #fff;
  border: 1px solid #000;
`;

const Article = styled.div`
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const LandTarget = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  Div {
    padding: 10px;
    background: #fff;
    margin-right: 10px;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    display: inline-block;
    color: #fff;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    margin-right: 10px;
  }
  input[type='radio']:checked + label {
    color: #000;
  }
  span {
    margin-right: 10px;
    color: #fff;
  }
  span:hover {
    color: #000;
    cursor: pointer;
  }
`;
const PurposeTarget = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  Div {
    padding: 10px;
    background: #fff;
    margin-right: 10px;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label {
    display: inline-block;
    color: #fff;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    margin-right: 10px;
  }
  input[type='radio']:checked + label {
    color: #000;
  }
  span {
    margin-right: 10px;
    color: #fff;
  }
  span:hover {
    color: #000;
    cursor: pointer;
  }
`;

const Title = styled.input`
  background: #fff;
  margin: 20px 0;
  width: 100%;
  font-size: 24px;
  padding: 15px;
  border-radius: 0;
`;

const Nation = styled.input`
  margin-top: 20px;
  font-size: 16px;
  padding: 15px;
  border-radius: 0;
`;

const Content = styled.textarea`
  width: 100%;
  height: 600px;
  padding: 15px;
  border-radius: 0;
  font-size: 16px;
  resize: none;
`;
