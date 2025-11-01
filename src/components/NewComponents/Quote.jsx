import React from "react";
import {Fade} from "react-reveal";
import "./QuoteCss.css";

export default function Quote() {
  return (
    <section className="quote-wrapper">
      <div className="quote-card">
        <Fade bottom duration={1000} distance="30px">
          <p className="quote-mark">“</p>
          <p className="quote-line">Everything you can imagine is real.</p>
          <p className="quote-author">– Pablo Picasso</p>
        </Fade>
      </div>
    </section>
  );
}
