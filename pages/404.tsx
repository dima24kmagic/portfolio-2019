import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  color: white;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: lighter;
`;

const ErrorMessage = styled.h1`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 8px;
  font-weight: 500;
`;

const Separator = styled.div`
  width: 1px;
  height: 32px;
  background-color: white;
`;

const Subtext = styled.span`
  font-size: 72px;
  margin-right: 48px;
  position: relative;
  font-weight: bold;

  &::after {
    content: "";
    top: 50%;
    right: -24px;
    transform: translate(0, -50%);
    position: absolute;
    height: 48px;
    width: 1px;
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 300;
  padding: 9px 18px;
  width: 250px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  background: linear-gradient(-45deg, #f15077, #e8a364);
  color: white;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.22s ease-in-out, opacity 0.22s ease-in-out;
  &:hover {
    background-position:-250px;
  }
`;

function My404Page() {
  return (
    <Container>
      <MessageContainer>
        <ErrorMessage>
          <Subtext>404</Subtext> This page could not be found
        </ErrorMessage>
        <Link href="/">
          <Button>Go back to portfolio</Button>
        </Link>
      </MessageContainer>
    </Container>
  );
}

export default My404Page;
