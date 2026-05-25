import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./OverlayForm.css";

export default function OverlayForm({
  setShowForm
}) {

  const navigate = useNavigate();

  /* =========================================
     FORM STATE
  ========================================= */

  const [formData, setFormData] =
    useState({

      name:"",
      phone:"",
      eventDate:"",

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

    "Luxury 2L - 3L",

    "Royal 3L - 12L",

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

    const whatsappMessage = `🚨 Alert: Fresh Story Incoming 📲

Welcome to the Clicks By Korniza family 🤍

👤 Name:
${formData.name}

📱 Whatsapp:
${formData.phone}

📅 Event Date:
${formData.eventDate}

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

✨ We’ll get back to you shortly with a luxury cinematic experience.
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
        onClick={() => navigate(-1)}
      />

      {/* FORM CONTAINER */}

      <div className="form-container">

        {/* CLOSE BUTTON */}

   <button
  type="button"
  className="form-close-btn"
  onClick={(e) => {
    e.stopPropagation();
    navigate("/");
  }}
>
  ✕
</button>
        {/* TITLE */}

        <h2>
          Book Your Event
        </h2>

        <p className="form-subtitle">

        We don’t shoot weddings. We craft cinematic legacies for your special day.  
        </p>
        <p>
2026 dates filling fast 💨</p>
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

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.phone}
              onChange={handleChange}
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
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
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
              value={formData.event}
              onChange={handleChange}
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
              value={formData.crowd}
              onChange={handleChange}
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
              value={formData.location}
              onChange={handleChange}
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
              value={formData.budget}
              onChange={handleChange}
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
                  value={formData.customBudget}
                  onChange={handleChange}
                />

              </div>
            )
          }

          {/* MESSAGE */}

          <div className="input-group">

            <label>

              Tell us more
              <small>(Optional)</small>

            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
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