import styled from 'styled-components';

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  object-fit: cover;
`;

export const ReviewsList = styled.ul`
  list-style-type: none;
  padding: 30px;
  font-size: 16px;
  /* display: flex; */
`;

export const ReviewsListItem = styled.li`
  background-color: #fff;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserInfo = styled.p`
  margin: 4px 0;
`;

export const UserReview = styled.p`
  padding-left: 25px;
`;
