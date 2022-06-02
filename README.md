# 📝 홈페이지  [A-fo.kr](https://a-fo.kr)
## 📋 [팀노션 링크 들어가기](https://www.notion.so/40fa62a06e8e444280f9c84ff5ea274d)
![a-fo-mainImage](https://user-images.githubusercontent.com/96129738/171001558-4c3a09b6-a265-4aff-9c3a-f6c5eba57071.png)


## 🔎 서비스 소개
✈ **해외생활 정보 비교 및 공유 플랫폼**<br>
해외에서 성장하고싶은 사람들에게, 이전보다 정보를 쉽게 얻을 수 있도록 도움을 주는 사이트입니다.


## 🖥 프로젝트 아키텍쳐
![ppt-이미지로-변환용](https://user-images.githubusercontent.com/96129738/171004010-e03d4a6b-dda6-41c6-b0e3-5f18c12d149f.svg)


## 🛠 기술 스택
| 이름          | 설명               | 
| ------------- | -------------------|
| React v17.0.2 | Javascript library |
| s3            | Storage service    |
| CloudFront    | Web service        |  
| Git Action    | CI/CD              |


## 📕 주요 라이브러리

| 이름    | 설명                       | 버전   |
| ------------- | -------------------------- | ------ |
| axios         | HTTP 비동기 통신 | 0.27.2 |
|redux toolkit     | React상태관리                      |1.8.1 |
|  redux-persist      | 저장소 (localstorage,sessiongstorage)에 저장                | 6.0.0  |
|react router dom      | 페이지 이동                      |5.2.0 |
| socket.io-client          | 서버와 실시간 양방향 통신      |4.5.1  |
| styled-components  | CSS                 |5.3.5  |

## 🎄 프로젝트 API
👉 A-fo API 명세서 : https://xkskxhtm96.gitbook.io/99-api-1/reference/api-reference


## 🌠 기능소개

- 나라별 비교 정보 공유
- 커뮤니티 기능


## 🔑 트러블 슈팅 상세 보기


<details markdown="1">
<summary>탭메뉴</summary>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
## 

### 목적 및 초기상황

<aside>
💡 많은 데이터가 담겨있는 페이지에서, 원하는 정보가 아래쪽에 있을 때 계속 스크롤을 하지 않고 탭메뉴에서 원하는 정보가 있는 항목을 클릭하여 이동할 수 있도록 하였습니다. 

</aside>

### 문제상황

<aside>
💡 탭메뉴에서 원하는 카데고리 클릭시 해당위치로 스크롤이 되어야 하는데, 데이터가 계속해서 바뀌다보니 위치값으로 해결하지 못하는 상황이 발생했습니다.

</aside>

### 해결책

<aside>
💡 박스높이를 고정시키고 데이터의 길이가 해당 높이를 벗어나면 그 안에서 스크롤 가능하게 구현하여, 박스의 위치값을 구하고 해당위치로 이동 or Ref를 사용하여 해당요소로 이동
  
  위치값으로 이동시, 토글이 닫혀있을 경우와 열려있을 경우 모두 생각해야 하기 때문에 useRef, forwardRef, map함수를 이용하여 ref배열의 각 요소에 해당하는 위치로 이동하도록 구현했습니다.
  
</aside>

### 고찰

<aside>
  💡 컴포넌트의 분리로 forwardRef를 사용해야하는 구조였습니다. forwardRef의 사용법을 알아보고 적용하는 과정에서 에러를 겪었습니다. 에러를 해결하고 적용을 완료하였고, 앞으로 forwardRef를 사용함에 있어서는 잘 적용할 수 있겠다는 자신감을 얻을 수 있었습니다.     

</aside>
</details>

---
## 👨‍👩‍👧‍👧 팀원 깃허브 주소

- 프론드엔드
  - 이윤지 : https://github.com/uoohs2
  - 조영민 : https://github.com/alonjoe
  
- 백엔드
  - 이태성 : https://github.com/qwe1234k
  - 유지웅 : https://github.com/JiwoongYoo1
  - 윤석일 : https://github.com/IcandoDeveloper
