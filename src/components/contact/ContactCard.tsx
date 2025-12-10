import type { ReactNode } from "react";

interface Props {
  link: string;
  label: string;
  icon: ReactNode;
  username: string;
}

const ContactCard = ({ link, label, icon, username }: Props) => {
  return (
    <>
      <a href={link} target="_blank">
        <div className="socials-container">
          {icon}
          <p>
            {label}
            <span>{username} &#8599;</span>
          </p>
        </div>
      </a>
    </>
  );
};

export default ContactCard;
