import { useState } from "react";

import "./OverlayForm.css";

export default function OverlayForm({
  setShowForm
}) {

  /* =========================================
     FORM STATE
  ========================================= */

  const [formData, setFormData] =
    useState({

      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      date:"",
      event:"",
      crowd:"",
      location:"",
      message:""

    });

  /* =========================================
     HANDLE CHANGE
  ========================================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });
  };

  /* =========================================
     WHATSAPP SUBMIT
  ========================================= */

  const handleSubmit = (e) => {

    e.preventDefault();

    const whatsappNumber =
      "918667041407";

    const whatsappMessage = `✨ Premium Photography Inquiry

👤 Name:
${formData.firstName} ${formData.lastName}

📧 Email:
${formData.email}

📱 Whatsapp:
${formData.phone}

📅 Event Date:
${formData.date}

🎉 Event Type:
${formData.event}

👥 Crowd Count:
${formData.crowd}

📍 Location:
${formData.location}

📝 Additional Details:
${formData.message}

`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
      whatsappURL,
      "_blank"
    );
  };

  return (

    <div className="overlay-form">

      {/* BACKDROP CLOSE */}

      <div
        className="overlay-bg"
        onClick={() =>
          setShowForm(false)
        }
      />

      {/* FORM CONTAINER */}

      <div className="form-container">

        {/* CLOSE BUTTON */}

        <button
          className="close-btn"
          onClick={() =>
            setShowForm(false)
          }
        >

          ✕

        </button>

        {/* TITLE */}

        <h2>
          Book Your Event
        </h2>

        <p className="form-subtitle">

          Let’s create a luxury
          cinematic experience
          for your special day.

        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="input-group">

            <label>

              Name
              <span>*</span>

            </label>

            <div className="name-fields">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={
                  formData.firstName
                }
                onChange={
                  handleChange
                }
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={
                  formData.lastName
                }
                onChange={
                  handleChange
                }
              />

            </div>

          </div>

          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
            />

          </div>

          {/* PHONE */}

          <div className="input-group">

            <label>

              Whatsapp Number
              <span>*</span>

            </label>

            <input
              type="tel"
              name="phone"
              placeholder="+91 00000 00000"
              value={
                formData.phone
              }
              onChange={
                handleChange
              }
              required
            />

          </div>

          {/* EVENT DATE */}

          <div className="input-group">

            <label>

              Event Date
              <span>*</span>

            </label>

            <input
              type="date"
              name="date"
              value={
                formData.date
              }
              onChange={
                handleChange
              }
              required
            />

          </div>

          {/* EVENT */}

          <div className="input-group">

            <label>

              Name of the Event
              <span>*</span>

            </label>

            <select
              name="event"
              value={
                formData.event
              }
              onChange={
                handleChange
              }
              required
            >

              <option value="">
                Please Select
              </option>

              <option>
                Wedding
              </option>

              <option>
                Reception
              </option>

              <option>
                Birthday
              </option>

              <option>
                Engagement
              </option>

              <option>
                Corporate Event
              </option>

            </select>

          </div>

          {/* CROWD */}

          <div className="input-group">

            <label>

              Number of Crowd
              <span>*</span>

            </label>

            <input
              type="number"
              name="crowd"
              placeholder="Approx count"
              value={
                formData.crowd
              }
              onChange={
                handleChange
              }
              required
            />

          </div>

          {/* LOCATION */}

          <div className="input-group">

            <label>

              Event Location
              <span>*</span>

            </label>

            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={
                formData.location
              }
              onChange={
                handleChange
              }
              required
            />

          </div>

          {/* MESSAGE */}

          <div className="input-group">

            <label>

              Tell us more

            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your event..."
              value={
                formData.message
              }
              onChange={
                handleChange
              }
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="submit-btn"
          >

            SEND TO WHATSAPP

          </button>

        </form>

      </div>

    </div>
  );
}