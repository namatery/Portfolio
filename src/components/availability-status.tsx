"use client";

import { TypeAnimation } from "react-type-animation";

const availabilityMessage = "Trying to leave things better than I found them";

export function AvailabilityStatus() {
  return (
    <p className="eyebrow" aria-label={availabilityMessage}>
      <span className="availability-dot" aria-hidden="true" />
      <TypeAnimation
        aria-hidden="true"
        className="availability-text"
        cursor={true}
        preRenderFirstString={false}
        sequence={[availabilityMessage]}
        speed={{ type: "keyStrokeDelayInMs", value: 38 }}
        wrapper="span"
      />
      <span className="availability-text-reduced" aria-hidden="true">
        {availabilityMessage}
      </span>
    </p>
  );
}
