import React from "react";
import "./BookingForm.css";

export const BookingForm = () => {
    return (
        <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-md-push-5">
                            <div class="booking-cta">
                                <h1>Reserve your suite on the Eclipse</h1>
                                <p>
                                    Experience the 6-star Ultra-Luxury Discovery
                                    Yacht Experience
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-md-pull-7">
                            <div class="booking-form">
                                <form>
                                    <div class="form-group">
                                        <span class="form-label">
                                            Your Destination
                                        </span>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Enter your preferred ocean destination"
                                        />
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <span class="form-label">
                                                    Preferred departure date
                                                </span>
                                                <input
                                                    class="form-control"
                                                    type="date"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/* <div class="col-sm-6">
                                            <div class="form-group">
                                                <span class="form-label">
                                                    Check out
                                                </span>
                                                <input
                                                    class="form-control"
                                                    type="date"
                                                    required
                                                />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <span class="form-label">
                                                    Rooms
                                                </span>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <span class="form-label">
                                                    Adults
                                                </span>
                                                <select class="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                                <span class="select-arrow"></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="form-group">
                                                <span class="form-label">
                                                    Email address:
                                                </span>
                                                <input
                                                    class="form-control"
                                                    type="email"
                                                    placeholder="myemail@gmail.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-btn">
                                        <button class="submit-btn">
                                            Enquire now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
