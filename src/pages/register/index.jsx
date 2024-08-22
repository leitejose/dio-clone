import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdLogin, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper, InfoText, RegisteredAccount, RowInfoText } from './styles';

const Register = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();

    const handleRegister = (data) => {
        // Aqui você pode acessar os valores dos inputs
        console.log(data);
        navigate('/login');
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Começe agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <Input placeholder="Nome Completo" leftIcon={<MdPerson/>} name="email" control={control} />
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <RowInfoText>
                        <InfoText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</InfoText>
                        </RowInfoText>
                        <Row>
                            <RegisteredAccount>Já tenho conta</RegisteredAccount>
                            <a href="/login"><CriarText>Fazer login</CriarText></a>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Register };