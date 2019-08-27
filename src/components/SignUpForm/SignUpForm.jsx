import React from "react";

export default function SignUpForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  async function signUp(event) {
    event.preventDefault();
  }

  return (
    <form noValidate autoComplete="off" onSubmit={signUp}>

    </form>
  );
}
