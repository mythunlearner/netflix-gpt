export const checkValidData = (email, password) => {
   const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
   const isPasswordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
   if(!isEmailValid) return "Email Id is not valid";
   if(!isPasswordValidation) return "Password is not valid";
};