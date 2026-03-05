import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../hooks/useSignup";
import styled from "styled-components";

export default function Signup() {
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log({ ...data });

    signup({ ...data });
  };

  return (
    <Container>
      <Card>
        <Title>Create Account</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <StyledInput
              type="text"
              placeholder="Full name"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
          </FormGroup>

          <FormGroup>
            <StyledInput
              type="email"
              placeholder="Email address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </FormGroup>

          <FormGroup>
            <StyledInput
              type="tel"
              placeholder="Mobile phone"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />
            {errors.phone && <Error>{errors.phone.message}</Error>}
          </FormGroup>

          <FormGroup>
            <StyledInput
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}
          </FormGroup>

          <FormGroup>
            <StyledInput
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <Error>{errors.confirmPassword.message}</Error>
            )}
          </FormGroup>

          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating Account..." : "Sign Up"}
          </Button>
        </Form>

        <LoginText>
          Already have an account? <StyledLink to="/login">Login</StyledLink>
        </LoginText>
      </Card>
    </Container>
  );
}

//////////////////////////////////////////////////////
// STYLED COMPONENTS
//////////////////////////////////////////////////////

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
  color: white;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid;
  background: white;
  border: 1px solid ${(props) => (props.$error ? "#ef4444" : "#3f3f46")};

  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #311c1f;
    box-shadow: 0 0 0 2px rgba(253, 254, 255, 0.3);
  }
`;

const Error = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: 4px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 12px;
  background: #db277733;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #83023a33;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoginText = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #a1a1aa;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #60a5fa;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
