import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTotalReadDB } from "../../redux/modules/board";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  console.log(postsPerPage, totalPosts, paginate);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const dispatch = useDispatch();

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item" onClick={() => {
              paginate(number);
              dispatch(getTotalReadDB(number));
              console.log(number)
              }}>
              <PageSpan  className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;

const PageUl = styled.ul`
  margin-top: 30px;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  padding: 1px;
`;

const PageLi = styled.li`
  display: inline-block;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  width: 25px;
  background-color: #fff;
  margin: 3px;
  &:hover {
    cursor: pointer;
    background-color: #d2dfff;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const PageSpan = styled.span`
  text-align: center;
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;