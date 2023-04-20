const handleError = (read) => {
  const error = {};
  const email_pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phone_pattern = /^[0-9]{10}$/;
  const name_pattern = /^[a-zA-z]$/;
  if (!name_pattern.test(read.name) && read.name) {
    error.name = "please enter text only";
  }
  if (read.name === "") {
    error.name = "name is required";
  }
  if (read.email === "") {
    error.email = "email is required";
  }
  if (!email_pattern.test(read.email) && read.email) {
    error.email = "email did'nt Match";
  }
  if (!phone_pattern.test(read.phone) && read.phone) {
    error.phone = " please enter minimum 10 number";
  }
  if (read.phone === "") {
    error.phone = "phone no is required";
  }
  if (read.dob === "") {
    error.dob = "date of birth is required";
  }
  if (read.gender === "") {
    error.gender = "gender is required";
  }

  return error;
};
export default handleError;
