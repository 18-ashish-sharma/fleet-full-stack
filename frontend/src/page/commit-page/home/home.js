import React from 'react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Title>Welcome to the React Home Page</Title>
      <Paragraph>This is a simple React homepage.</Paragraph>
    </StyledHomePage>
  );
};

export default HomePage;
