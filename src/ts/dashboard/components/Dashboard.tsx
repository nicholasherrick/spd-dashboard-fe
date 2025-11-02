import PageHeader from "../../shared/components/PageHeader";
import { CustomLink } from "../../shared/components/CustomLink";

const Dashboard = () => {
  return (
    <>
      <PageHeader text="Dashboard" />
      <CustomLink to="/instruments">Instruments</CustomLink>
    </>
  );
};

export default Dashboard;
