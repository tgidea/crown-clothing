import {
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import { useState } from "react";

import "./sign-in.styles.scss";

import Button from "../../Components/button/button.component";
import FormInput from "../../Components/form-input/form-input.components";
// import { UserContext } from "../../context/user.context";

const defaultFormField = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      // setCurrentUser(response.user);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEvent = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("handleSubmit");
      // const response = await signInAuthWithEmailAndPassword(email, password);
      await signInAuthWithEmailAndPassword(email, password);
      // setCurrentUser(response.user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password or mail");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found");
      }
    }
  };
  return (
    <div className="sign-in-container">      
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          {/* need to write this type to prevant submit , by default is submit  */}
          <Button type="button" onClick={logGoogleUser} buttonType={"google"}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;

// useEffect( () => {
//     async function getResult(){
//         const response = await getRedirectResult(auth);
//         console.log(response);
//         if(response){
//             const userDocRef = await createUserDocumentFromAuth(response.user);
//         }
//     }
//     getResult();
// },[]);
