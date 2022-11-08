import styled from 'styled-components';
import { Input } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .anticon svg {
    width: 75%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  background: #ffffff;
  width: 90%;
  min-height: 90vh;
  max-height: 1000vh;
  max-width: 1440px;
  height: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px; 
  margin-top: 44px;
  padding: 47px 47px 0 47px;
`;

export const CentralContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 263px;
`;

export const Title = styled.h1`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 71px;
  color: #000;
  justify-content: center;
  text-align: center;
  font-feature-settings: 'tnum' on, 'lnum' on;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #e2e8f0;
  border-radius: 2px;
  width: 55%;
  height: 10% !important;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;  
  line-height: 24px;
  margin-bottom: 40px;
  padding: 20px;

  ::-webkit-input-placeholder { 
    color: #94a3b8;
    background: transparent;
  }
  .ant-btn {
    border-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: transparent;
  }
  .ant-input {
    border: none;
    padding: none;
  }
  .ant-input-group-addon {
    background: transparent;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ArticleTitle = styled.h2`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #000000;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start; 
  background-color: beige;
  margin: 20px;
  padding: 10px;
  border-radius: 3px;
  &:hover{
    transform: scale(1.05);
  }
`;


export const Name = styled.h2`
  font-size: 16px;
  color: black;
`;

export const Description = styled.p`
  font-size: 14px;
  color: black;
  flex-wrap: wrap;
`;