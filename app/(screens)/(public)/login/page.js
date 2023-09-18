"use client";
const { Button } = require("@/components/ui/button");
const { signIn } = require("next-auth/react");

const Login = () => {
  return <Button onClick={() => signIn("google")}>Login with Google</Button>;
};
export default Login;
