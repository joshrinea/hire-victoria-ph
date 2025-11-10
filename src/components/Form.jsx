import useWeb3forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "../context/ToastContext";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  const apiKey = import.meta.env.VITE_APP_WEB3_FORMS_ACCESS_KEY;
  const { showToast } = useToast();

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    // settings: {
    //   from_name: "Test",
    //   subject: "New Contact Message from your Website",
    // },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      showToast(`${data.message || "Email has been sent!"}`, "success");
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      showToast("Something went wrong. Please try again.", "error");
      setMessage(msg);
    },
  });

  const handleOnSubmit = async (data) => {
    await onSubmit({
      ...data,
      settings: {
        from_name: data.name,
        subject: data.subject || "New Contact Message",
      },
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <input
          type="checkbox"
          id=""
          className=""
          style={{ display: "none" }}
          {...register("botcheck")}
        />
        <div className="row gy-4">
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              id="name"
              className={`form-control ${errors.name ? "border-error" : ""}`}
              placeholder="Your Name"
              autoComplete="false"
              {...register("name", {
                required: "Name is required",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1">
                <small style={{ color: "red" }}>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className={`form-control ${errors.email ? "border-error" : ""}`}
              name="email"
              placeholder="Your Email"
              autoComplete="false"
              {...register("email", {
                required: "Email is required",
                maxLength: 80,
              })}
            />
            {errors.email && (
              <div className="mt-1">
                <small style={{ color: "red" }}>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="col-md-12">
            <input
              type="text"
              className={`form-control ${errors.subject ? "border-error" : ""}`}
              name="subject"
              id="subject"
              placeholder="Subject"
              autoComplete="false"
              {...register("subject", {
                required: "Subject is required",
                maxLength: 200,
              })}
            />
            {errors.subject && (
              <div className="mt-1">
                <small style={{ color: "red" }}>{errors.subject.message}</small>
              </div>
            )}
          </div>

          <div className="col-md-12">
            <textarea
              className={`form-control ${errors.message ? "border-error" : ""}`}
              name="message"
              rows="6"
              placeholder="Message"
              autoComplete="false"
              {...register("message", {
                required: "Message is required",
                maxLength: 200,
              })}
            ></textarea>
            {errors.message && (
              <div className="mt-1">
                <small style={{ color: "red" }}>{errors.message.message}</small>
              </div>
            )}
          </div>

          <div className="col-md-12 text-center">
            <button type="submit">
              {!isSubmitting ? (
                <span>Send Message</span>
              ) : (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
