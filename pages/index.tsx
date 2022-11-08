import {Article, ArticleContainer, ArticleTitle, CentralContainer, Container, ContentContainer, Description, Name, PageContainer, StyledInput, Title } from "./styles";
import Data from './mock.json'
import { useEffect, useState } from "react";
import { Type } from "typescript";

export default function Home() {
  const [input, setInput] = useState('');
  const [data, setData] = useState(Data.data)
  
  let FilteredFaq = Data.data;

  useEffect(() => {
    if(input){
      setData(Data.data);
      const FaqFind = Data.data.filter((thisInput) =>
        thisInput.title.toLowerCase().startsWith(input.toLowerCase().trim())
      );
      FilteredFaq = FaqFind;
      setData(FilteredFaq);
      if (input.length === 0 || !input.trim()) {
        setData(Data.data); 
      } 
    } else {
      setData(Data.data)
    }
  }, [input]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.currentTarget.value);
  };
  
  return (
    <Container>
      <ContentContainer>
        <CentralContainer>
          <Title>O squad mais lindo do mundo</Title>
          <StyledInput
            placeholder="Quem você quer conhecer?"
            value={input}
            onChange={handleChangeInput}
          />
        </CentralContainer>
        <ArticleContainer>
          {
            data.map(
              (result) => {
                return(
                  <Article>
                    <Name>{result.title}</Name>
                    <Description>{result.description}</Description>
                  </Article>
                );
              }
            )
          }
        </ArticleContainer>
      </ContentContainer>
  </Container>
  )
}
