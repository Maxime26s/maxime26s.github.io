import React from "react";
import Mail from "../../assets/images/mail.svg";

type IconProps = {
  className?: string;
};

const IconMail = ({ className }: IconProps) => <img src={Mail} />;

export default IconMail;
