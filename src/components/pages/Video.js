import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Video() {
    return (
        <>
            <div>
                <h3>
                    Overview - Journey Code: 301S100322 – Antarctica & South
                    Georgia
                </h3>
                <h3>Departure: 9th March - Return: 2nd April, 2022</h3>
                <h3>Voyage: 11th March - 28th March 2022</h3>
                <section class="video">
                    <iframe
                        width="1000px"
                        height="600px"
                        src="https://fast.wistia.com/embed/channel/31ag3su09q?wvideo=t0ztdkt7e8;wchannelid=31ag3su09q;wmediaid=t0ztdkt7e8"
                    ></iframe>
                </section>
            </div>
            <Footer />
        </>
    );
}
