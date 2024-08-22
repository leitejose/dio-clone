import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/89952454?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <a href="/login"><Button href="" title="Entrar" /></a>
                <a href="/register"><Button href="" title="Cadastre-se" /></a>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
