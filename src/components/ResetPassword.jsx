import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const reset = async () => {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent!");
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ResetPassword;
