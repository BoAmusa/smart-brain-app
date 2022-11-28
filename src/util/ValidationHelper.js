export const isValidEmail = new RegExp("^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$");
export const isValidPassword = new RegExp("^(?!.* )(?=.*[A-Z]).{3,15}$");
export const isNameEmpty = new RegExp("^\\s+$");
