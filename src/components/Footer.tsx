import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="my-6">
      <a
        className="flex items-center justify-center gap-x-3 no-underline"
        href="https://github.com/lucaslmlok/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size={36} />
        <small>Built by lucaslmlok 2022.</small>
      </a>
    </footer>
  );
};

export default Footer;
