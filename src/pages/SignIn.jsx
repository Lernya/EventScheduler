import { authorize } from "../utils/network";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
  return (
    <AuthForm
      buttonText="Sign In"
      redirectPath="/protected"
      apiCall={authorize}
      regLink={true}
    />
  );
};

export default SignIn;
