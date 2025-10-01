import { type PageHeaderProps } from "../types";

const PageHeader = ({ text }: PageHeaderProps) => {
  return <h1 className="my-4">{text}</h1>;
};

export default PageHeader;
