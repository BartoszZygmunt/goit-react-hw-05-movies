import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  outline: 2px solid darkgreen;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 22px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  font: inherit;
  font-size: 18px;
  color: white;
  width: 140px;
  height: 48px;
  border: 0;
  background-color: darkgreen;
  cursor: pointer;
  outline: none;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;
