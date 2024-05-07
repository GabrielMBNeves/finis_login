import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nome completo" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a senha" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Registrar-se</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Já tem uma conta?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Entrar
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
