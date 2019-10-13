export default function formatAuthInputErrors(errors) {
  let formattedErrors = {};
  errors.forEach(error => {
    const { field, message } = error;

    formattedErrors[field] = message;
  });
  return formattedErrors;
}
