import { useFormik } from "formik";
import Joi from "joi";
import "../style/leadForm.css";
import leadService from "../../services/leadService";
import { useState } from "react";
import { useNavigate } from "react-router";
import ReactGA from "react-ga4";
function LeadForm() {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const leadSchema = Joi.object({
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
  });

  const leadValues = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },

    validate: (values) => {
      const { error } = leadSchema.validate(values, { abortEarly: false });
      if (!error) return {};
      const errors = {};
      error.details.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      return errors;
    },

    onSubmit: async (values) => {
      try {
        const response = await leadService.createLead(values);
        ReactGA.event({
          category: "Form",
          action: "טופס_נשלח",
          label: "lead_form",
        });
        setTimeout(
          () =>
            navigate("/success", {
              replace: true,
              state: { submitted: true },
            }),
          1000,
        );

        return response;
      } catch (err) {
        if (err.response?.status >= 400) {
          const response = err.response.data;
          setServerError(response);
          ReactGA.event({
            category: "Form",
            action: "טופס_לא_נשלח",
            label: err.response.data,
          });
        }
      }
    },
  });

  return (
    <form
      onSubmit={leadValues.handleSubmit}
      onFocus={() =>
        ReactGA.event({
          category: "Form",
          action: "התחיל_למלא_טופס",
          label: "lead_form",
        })
      }
    >
      {serverError && <div className="serverError">{serverError}</div>}
      <div className="form-header">השאירי פרטים ואחזור אלייך באופן אישי!</div>
      <div>
        <label htmlFor="name">
          שם מלא <span className="red-dot">*</span>
        </label>
        <input
          type="text"
          placeholder="שם מלא"
          {...leadValues.getFieldProps("name")}
        />
        {leadValues.touched.name && leadValues.errors.name && (
          <div className="error">{leadValues.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="phone">
          טלפון <span className="red-dot">*</span>
        </label>
        <input
          type="tel"
          placeholder="טלפון"
          {...leadValues.getFieldProps("phone")}
        />
        {leadValues.touched.phone && leadValues.errors.phone && (
          <div className="error">{leadValues.errors.phone}</div>
        )}
      </div>
      <button type="submit">שלח</button>
    </form>
  );
}

export default LeadForm;
