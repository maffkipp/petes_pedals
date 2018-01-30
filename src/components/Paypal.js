import React from "react";
import "../css/Paypal.css";

// Paypal button in ProductFull component. Links to outside site
const Paypal = props => {
  return (
    <div className="paypal-container">
      <p className="paypal-text">Make a deposit with paypal:</p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value={props.paypal} />
        <input
          type="image"
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
          border="0"
          name="submit"
          alt="Check out with PayPal"
        />
      </form>
    </div>
  );
};

export default Paypal;
