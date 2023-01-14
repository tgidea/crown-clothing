import SignUpForm from '../../Components/sign-up-form/sign_up.components';
import SignInForm from '../../Components/sign-in-form/sign_in.component';
import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className='authentication-component'> 
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication;