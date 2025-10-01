import PageHeader from "../../shared/components/PageHeader";
import Button from "../../shared/components/Button";

const Instruments = () => {
  const handleAdd = () => {};

  return (
    <>
      <PageHeader text="Manage Instruments" />
      <Button className="btn btn-primary" type="button" onClick={handleAdd}>
        Add
      </Button>
    </>
  );
};

export default Instruments;
