export const getCurrentUrl = () => {
  return typeof window !== "undefined" ? window.location.href : "";
};

export function fetchResponseErrors(response) {
  let msgs = [];
  if (response?.status == 422) {
    let errors = response.data.errors;
    let _errors = Object.keys(errors);
    for (let i = 0; i < _errors.length; i++) {
      msgs.push(errors[_errors[i]][0]);
    }

    return msgs;
  } else {
    msgs.push(response?.data?.message);
    return msgs;
  }
}


