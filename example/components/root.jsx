import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SuperQuery, { Orientation } from '@themgoncalves/super-query';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrientation: Orientation.current(),
      isOrientationLocked: Orientation.isLocked(),
    };
  }

  componentDidMount() {
    Orientation.onChange(this.onOrientationChange);
  }

  onOrientationChange = (orientation) => {
    this.setState({
      currentOrientation: orientation,
    });
  };

  lockOrientation = () => {
    const isLocked = Orientation.lock(Orientation.current());
    this.setState({
      isOrientationLocked: isLocked,
    });
  };

  unlockOrientation = () => {
    const isLocked = Orientation.unlock();
    this.setState({
      isOrientationLocked: isLocked,
    });
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Title><span aria-label="icon" role="img">🎠</span> Super-Query</Title>
        <Subtitle>A super media-query for styled-component. Intuitive and easy of use.</Subtitle>
        <Wrapper>
          <Section>Breakpoints:</Section>
          <ExampleBreakpoints></ExampleBreakpoints>
          <Section>Screen Orientation (css):</Section>
          <ExampleOrientation></ExampleOrientation>
          <Section>Screen Orientation Controls (JS):</Section>
          <OrientationControlView>
            <li>Current: <span>{this.state.currentOrientation}</span></li>
            <li>Is Locked: <span>{this.state.isOrientationLocked.toString()}</span></li>
            {this.state.isOrientationLocked ? (
              <li>Unlock orientation: <Button onClick={this.unlockOrientation}>Unlock the current orientation</Button></li>
            ) : (
              <li>Lock orientation: <Button onClick={this.lockOrientation}>Lock orientation</Button></li>
            )}
            <Note>
              NOTE: This feature might not work in many browsers.
              <a href="https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation" target="_black">
                Click here for more information
              </a>
            </Note>
          </OrientationControlView>
        </Wrapper>
      </React.Fragment>
    );
  }
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    background: #aa4b6b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
    background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
    color: white;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,Arial,sans-serif;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 22px;
  margin: 20px 40px 10px;
`;

const Subtitle = styled.h2`
  font-weight: lighter;
  font-size: 16px;
  margin: 0 40px 100px;
`;

const Section = styled.h2`
  font-weight: normal;
  font-size: 22px;
  margin: 0 40px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px 15px;
  margin: 5px;
  color: 4426a8;
  border: solid 2px #4426a8;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover,
  &:active {
    background-color: #4426a8;
    color: white;
  }
`;

const ExampleBreakpoints = styled.div`
  text-align: center;
  padding: 20px;
  border: dotted 4px white;
  margin: 0 40px;
  margin-bottom: 80px;
  &::before {
    content: 'Breakpoint .xs()';
  }
  ${props => SuperQuery(props.theme.breakpoints).all
    .and
    .minWidth
    .small
    .css`
    background-color: rgba(255, 255, 255, 0.2);
    &::before {
      content: 'Breakpoint .sm()';
    }
  `};
  ${SuperQuery().all
    .and
    .minWidth
    .md
    .css`
    background-color: rgb(0, 216, 255);
    &::before {
      content: 'Breakpoint .md()';
    }
  `};
  ${SuperQuery().all
    .and
    .minWidth
    .lg
    .css`
    background-color: rgb(0, 145, 255);
    &::before {
      content: 'Breakpoint .lg()';
    }
  `};
  ${SuperQuery().all
    .and
    .minWidth
    .xl
    .css`
    background-color: rgb(29, 89, 134);
    &::before {
      content: 'Breakpoint .xl()';
    }
  `};
`;

const ExampleOrientation = styled.div`
  text-align: center;
  padding: 20px;
  border: dotted 4px white;
  margin: 0 40px;
  margin-bottom: 80px;
  ${SuperQuery().all
    .and
    .portrait
    .css`
    background-color: rgb(61, 174, 61);
    &::before {
      content: 'Orientation Portrait';
    }
  `};

  ${SuperQuery().all
    .and
    .landscape
    .css`
    background-color: rgb(255, 94, 12);
    &::before {
      content: 'Orientation Landscape';
    }
  `};
`;

const OrientationControlView = styled.ul`
  background-color: white;
  color: #333;
  padding: 20px;
  margin: 0 40px;
  margin-bottom: 80px;
  list-style: none;
  border-radius: 3px;
  > li {
    padding: 10px 0;
    > span {
      background-color: #e2e2e2;
      color: #333;
      margin-left: 10px;
      padding: 2px 4px;
      border-radius: 3px;
    }
  }
`;

const Note = styled.li`
  font-size: 10px;
  line-height: 1.2em;
  a {
    margin-left: 10px;
  }
`;
