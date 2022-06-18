import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

const Socials = () => {
  return (
    <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <AiOutlineMail className="text-2xl" />
        <a href="mailto:prateek_soni@outlook.com">prateek_soni@outlook.com</a>
      </li>
      <li className="flex items-center gap-2">
        <AiOutlineLinkedin className="text-2xl" />
        <a href="https://linkedin.com/in/prateeksoni47">
          linkedin.com/in/prateeksoni47
        </a>
      </li>
      <li className="flex items-center gap-2">
        <AiOutlineGithub className="text-2xl" />
        <a href="https://github.com/prateeksonii">github.com/prateeksonii</a>
      </li>
    </ul>
  );
};

export default Socials;
