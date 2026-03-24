const Joi = require("joi");

const validation = {
  name: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^[א-תa-zA-Z\s]+$/)
    .required()
    .messages({
      "string.empty": "שם חובה",
      "string.min": "שם חייב להיות לפחות 2 תווים",
      "string.max": "שם יכול להכיל עד 50 תווים",
      "string.pattern.base": "שם יכול להכיל אותיות בלבד",
    }),

  phone: Joi.string()
    .pattern(/^(?:\+972|0)5\d{8}$/)
    .required()
    .messages({
      "string.empty": "טלפון חובה",
      "string.pattern.base": "מספר טלפון לא תקין ",
    }),
};

const leadValidation = Joi.object(validation);

module.exports = {
  validation,
  leadValidation,
};
