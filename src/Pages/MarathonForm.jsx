import React from "react";
import MarathonEntryForm from "../Componetns/MarathonEntryForm";

const MarathonForm = ({ isEdit = false }) => {
  return <MarathonEntryForm isEdit={isEdit} editId={""} />;
};

export default MarathonForm;
