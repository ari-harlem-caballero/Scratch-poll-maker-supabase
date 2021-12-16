import { signUp, signIn } from './fetch-utils.js';

const signInForm = document.querySelector('#sign-in');
const signUpForm = document.querySelector('#sign-up');


signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    
    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    
    await signIn(email, password);
    
    window.location.href = './polls';
});

signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    const email = data.get('email');
    const password = data.get('password');

    await signUp(email, password);

    window.location.href = './polls';
});