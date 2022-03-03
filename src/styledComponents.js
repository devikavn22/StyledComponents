import styled from 'styled-components'

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
  align-items: center;
  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
  height: 100vh;
`
export const Heading = styled.h1`
  color: #0070c1;
  justify-content: center;
  text-align: center;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  padding: 10px;
  margin: 10px;
  width: 5%;
  margin-right: 20px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  color: ${props => (props.outline ? '#1e2121' : '#292627')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#16939c' : '#e30e5c')};
`
