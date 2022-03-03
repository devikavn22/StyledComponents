import {Heading, CustomButton, ContainerElement} from './styledComponents'

const App = () => (
  <ContainerElement>
    <Heading>Hello World</Heading>
    <CustomButton as="a" href="https://www.npmjs.com/">
      Learn npm
    </CustomButton>
    <CustomButton as="a" href="https://reactjs.org/" outline>
      Learn React
    </CustomButton>
  </ContainerElement>
)
export default App
