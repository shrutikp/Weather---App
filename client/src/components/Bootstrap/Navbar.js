import React from "react";

const Navbar = ({ dark, children, className }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      class={
        `navbar navbar-${dark} bg-${dark}` + (className ? +" " + className : "")
      }
    >
      <span class="navbar-brand mb-0 h1">{children}</span>
    </nav>
  );
};

export default Navbar;
