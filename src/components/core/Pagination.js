import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
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
  border: 1px solid #ccc;
  &:hover {
    cursor: pointer;
    background-color: #dedede;
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