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

      startDate:"",
      endDate:"",

      event:"",
      crowd:"",

      location:"",
      budget:"",
      customBudget:"",

      message:""

    });

  /* =========================================
     EVENT OPTIONS
  ========================================= */

  const eventOptions = [

    "Wedding & Reception",

    "Reception",

    "Engagement",

    "Birthday",

    "Ear Piercing Ceremony",

    "Half Saree Ceremony",

    "Name Ceremony",

    "Corporate Events"

  ];

  /* =========================================
     BUDGET OPTIONS
  ========================================= */

  const weddingBudgets = [

    "Bronze 55-65K",

    "Silver 70-80K",

    "Gold 80-90K",

    "Diamond 130-150K",

    "About 2L - 2.5L",

    "3L - 12L",

    "Custom"

  ];

  const normalBudgets = [

    "Bronze 18-24K",

    "Silver 28-32K",

    "Gold 40-50K",

    "Diamond 65-75K",

    "Custom"

  ];

  const selectedBudgetOptions =

    formData.event ===
    "Wedding & Reception"

      ? weddingBudgets

      : normalBudgets;

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
      "918680068246";

    const whatsappMessage = `✨ Premium Photography Inquiry

👤 Name:
${formData.firstName} ${formData.lastName}

📧 Email:
${formData.email}

📱 Whatsapp:
${formData.phone}

📅 Start Date:
${formData.startDate}

📅 End Date:
${formData.endDate}

🎉 Event Type:
${formData.event}

👥 Expected Crowd:
${formData.crowd}

📍 Event Location:
${formData.location}

💰 Expected Budget:
${
  formData.budget === "Custom"

    ? formData.customBudget

    : formData.budget
}

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

          {/* START DATE */}

          <div className="input-group">

            <label>

              Start Date
              <span>*</span>

            </label>

            <input
              type="date"
              name="startDate"
              value={
                formData.startDate
              }
              onChange={
                handleChange
              }
              required
            />

          </div>

          {/* END DATE */}

          <div className="input-group">

            <label>

              End Date
              <span>*</span>

            </label>

            <input
              type="date"
              name="endDate"
              value={
                formData.endDate
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

              {
                eventOptions.map(
                  (
                    item,
                    index
                  ) => (

                    <option
                      key={index}
                      value={item}
                    >

                      {item}

                    </option>
                  )
                )
              }

            </select>

          </div>

          {/* CROWD */}

          <div className="input-group">

            <label>

              Expected Crowd
              <span>*</span>

            </label>

            <input
              type="number"
              name="crowd"
              placeholder="Approx crowd count"
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

          {/* BUDGET */}

          <div className="input-group">

            <label>

              Expected Budget
              <small>
                (Optional)
              </small>

            </label>

            <select
              name="budget"
              value={
                formData.budget
              }
              onChange={
                handleChange
              }
            >

              <option value="">
                Select Budget
              </option>

              {
                selectedBudgetOptions.map(
                  (
                    item,
                    index
                  ) => (

                    <option
                      key={index}
                      value={item}
                    >

                      {item}

                    </option>
                  )
                )
              }

            </select>

          </div>

          {/* CUSTOM BUDGET */}

          {
            formData.budget ===
            "Custom" && (

              <div className="input-group">

                <label>

                  Enter Custom Budget

                </label>

                <input
                  type="text"
                  name="customBudget"
                  placeholder="Enter your expected budget"
                  value={
                    formData.customBudget
                  }
                  onChange={
                    handleChange
                  }
                />

              </div>
            )
          }

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