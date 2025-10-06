import type { ReactNode } from "react";

interface Props {
  link: string;
  icon: ReactNode;
}

function SocialMediaButton({ link, icon }: Props) {
  return (
    <>
      <a href={link} target="_blank">
        {icon}
      </a>
    </>
  );
}

export default SocialMediaButton;
