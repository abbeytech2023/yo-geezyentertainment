import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import SpinnerMini from "../components/SpinnerMini";

export default function Login() {
  const { login, isPending, errMessage } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    console.log(errMessage);

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
            <Input
              type="password"
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
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputGroup>

          <Button type="submit" disabled={isSubmitting}>
            {isPending ? <SpinnerMini /> : "Login"}
          </Button>
        </Form>

        <FooterText>
          Don’t have an account? <StyledLink to="/signup">Sign up</StyledLink>
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

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$error ? "#ef4444" : "#000")};
  background: white;
  /* color: #000; */
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

const ErrorText = styled.p`
  color: #ef4444;
  font-size: 13px;
  margin-top: 4px;
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

// import { useState } from "react";
// import supabase from "../lib/supabaseClients";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: form.email,
//       password: form.password,
//     });

//     if (error) {
//       setError(error.message);
//       setLoading(false);
//       return;
//     }

//     console.log("User:", data.user);
//     console.log("Session:", data.session);

//     setLoading(false);
//     // Redirect here if needed
//     // navigate("/dashboard");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <form
//         onSubmit={handleLogin}
//         className="w-full max-w-md p-6 bg-white rounded-lg shadow"
//       >
//         <h2 className="text-2xl font-bold mb-4">Login</h2>

//         {error && <p className="mb-3 text-red-500 text-sm">{error}</p>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full mb-3 p-2 border rounded"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-2 border rounded"
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-black text-white py-2 rounded"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// }
