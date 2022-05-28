import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { MdLanguage } from "react-icons/md"

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <MdLanguage size={128}/>
      <NxWelcome title="babel-bundle" />
    </StyledApp>
  );
}

export default App;
