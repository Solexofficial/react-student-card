export default function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, config) {
    let statusValidate;

    switch (validateMethod) {
      case 'isRequired':
        statusValidate = String(data).trim() === '';
        break;
      case 'isUrl':
        {
          const urlRegExp =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gm;
          statusValidate = !urlRegExp.test(data);
        }
        break;
      case 'isValidYear': {
        statusValidate = data < 1900 || data > new Date().getFullYear();
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
}
