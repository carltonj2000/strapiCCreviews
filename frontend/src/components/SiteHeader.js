import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <div className="site-header">
      <Link to="/">
        <h1>CJ reviews</h1>
      </Link>
    </div>
  );
}