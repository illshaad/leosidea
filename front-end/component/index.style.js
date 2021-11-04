import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-image: url("/background.jpg");
`;

export const Card = styled.div`
  padding: 20px 20px;
  width: 40%;
  height: 400px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 3px #6347d1;
  text-align: center;
  margin: 250px auto 0 auto;
`;

export const H1 = styled.h1`
  color: #999;
  font-size: 18px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CenterElement = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Input = styled.input`
  width: 230px;
  height: 50px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: #cd9bf6;
  font-size: 15px;
  line-height: 1rem;
  border-radius: 4px;
  width: 90px;
  height: 30px;
  color: #f9f9f9;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 5px auto;
  cursor: pointer;
`;
