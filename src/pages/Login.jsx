import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import SpinnerMini from "../components/SpinnerMini";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { login, isPending, errMessage } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    login({ email, password });
  };

  return (
    <Container>
      <Card>
        <Title>Welcome Back</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              type="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              $error={errors.email}
            />

            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                $error={errors.password}
              />

              <EyeButton
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </EyeButton>
            </PasswordWrapper>

            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputGroup>

          {errMessage && <ServerError>{errMessage}</ServerError>}

          <Button type="submit" disabled={isSubmitting || isPending}>
            {isPending ? <SpinnerMini /> : "Login"}
          </Button>
        </Form>

        <FooterText>
          Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
        </FooterText>
      </Card>
    </Container>
  );
}

//////////////////////////////////////////
// Styled Components
//////////////////////////////////////////

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 20px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: #18181b;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #27272a;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #9333ea;
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 50px 12px 14px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$error ? "#ef4444" : "#000")};
  background: white;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    border-color: #9333ea;
    box-shadow: 0 0 0 2px #9333ea4d;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorText = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: 4px;
`;

const ServerError = styled.p`
  color: #ef4444;
  text-align: center;
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #9333ea;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #7e22ce;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FooterText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #a1a1aa;
`;

const StyledLink = styled(Link)`
  color: #9333ea;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
