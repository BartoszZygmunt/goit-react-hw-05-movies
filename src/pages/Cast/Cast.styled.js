import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

export const CastListItem = styled.li`
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CastPhoto = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const CastInfo = styled.div`
  padding: 10px;
  margin: 0;
`;

export const CastInfoName = styled.p`
  font-weight: bold;
  margin: 0;
  margin-bottom: 8px;
  font-size: 22px;
`;

export const CastInfoChar = styled.p`
  margin: 0;
  font-size: 14px;
`;
