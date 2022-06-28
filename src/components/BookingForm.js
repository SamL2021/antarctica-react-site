import React from "react";
import "./BookingForm.css";

export const BookingForm = () => {
    return (
        <div className="booking__form__container">
            <h1>Want to experience the Scenic Eclipse for yourself?</h1>
            <form className="booking__form">
                <label>
                    Full name:
                    <input type="text" name="name" />
                </label>

                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
