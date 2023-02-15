import styled from '@emotion/styled'
import { ButtonLink } from "../components/ButtonLink"

const HeaderComponent = styled.header`
  display:flex;
  justify-content:space-between;
  flex-direction: row;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: white;
  box-shadow: 0px 1px 6px 0px rgb(128 128 128 / 60%);
  z-index: 1;
  padding: 10px 15px;
  box-sizing: border-box;
`

const Title = styled.h1`
  color: black;
  margin: 10px 0;
  text-align: left;
  font-size: 16px;
`

export const Header = () => {
  return (
    <HeaderComponent>
      <Title>
        Agrak Logo
      </Title>
      <ButtonLink link={'/create-user'} title={'Create user'} />
    </HeaderComponent>
  )
}