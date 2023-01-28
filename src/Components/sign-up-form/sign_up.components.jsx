import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.components";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
// import { UserContext } from "../../context/user.context";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  // const {setCurrentUser} = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Password not match.");
      return;
    }
    try {

      // we get user auth object from this. NOw store user in db using createUserDocumentFromAuth
      const userDocRef = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(userDocRef.user, { displayName });
      // setCurrentUser(userDocRef);
      alert('Succesfully Sign Up')
      setFormFields(defaultFormField);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already exists.");
      } else {
        console.log(error);
      }
    }
  };

  const handleEvent = (event) => {
    //these are form attributes
    // if attribute is email then set [email] inside defaultFormField = ..value...
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleEvent}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleEvent}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleEvent}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleEvent}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button                       
            type="submit"
        >Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
