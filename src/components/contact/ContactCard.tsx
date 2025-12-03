import type { ReactNode } from "react";

interface Props {
  link: string;
  label: string;
  icon: ReactNode;
  username: string;
}

const ContactCard = ({
  link,
  label,
  icon,
  username,
}: Props) => {
  return (
    <>
      <div className="socials-container">
        <a href={link} target="_blank">
          {icon}
        </a>
        <p>
          {label}
          <span>
            <a href={link} target="_blank">
              {username} &#8599;
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default ContactCard;