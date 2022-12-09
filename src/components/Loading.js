import React, { useState } from "react";

function Loading() {
  const [loading] = useState("Loading....🚶🚶🚶🚶🚶");
  return <>{loading}</>;
}

export default Loading;
