import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { MdPerson } from "react-icons/md"

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <MdPerson size={128} />
      <NxWelcome title="bundle-test" />
    </StyledApp>
  );
}

export default App;
