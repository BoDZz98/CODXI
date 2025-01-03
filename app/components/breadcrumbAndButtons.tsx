import { Breadcrumb, Button, Flex, Modal } from "antd";
import React, { useContext, useState } from "react";
import { CloseSquareOutlined } from "@ant-design/icons";
import InputsContext from "../context/InputsContext";

const BreadcrumbItems = [{ title: "All Employees" }, { title: "New" }];

type Props = {
  onReset: () => void;
};
const BreadcrumbAndButtons = ({ onReset }: Props) => {
  const inputCtx = useContext(InputsContext);

  const [isDiscarModalOpen, setisDiscarModalOpen] = useState(false);
  const [isWarningModalOpen, setisWarningModalOpen] = useState(false);
  const [isSuccessModalOpen, setisSuccessModalOpen] = useState(false);

  const showDiscardModal = () => setisDiscarModalOpen(true);
  const handleSaveBttn = () => {
    // Checking if all fields are filled
    const propertyCount = Object.keys(inputCtx).length;
    if (propertyCount === 50) {
      setisSuccessModalOpen(true);
    } else {
      setisWarningModalOpen(true);
    }
  };
  //----------------------------------------------
  const resetHandler = (x: number) => {
    onReset();
    inputCtx.reset();
    handleCloseBttn(x);
  };
  //----------------------------------------------
  const handleCloseBttn = (x: number) => {
    if (x === 1) {
      setisDiscarModalOpen(false);
    } else if (x === 2) {
      setisWarningModalOpen(false);
    } else {
      setisSuccessModalOpen(false);
    }
  };
  const okBttnStyle = "bg-customBlue text-xl px-6 py-5 text-white";
  const cancelBttnStyle =
    "border-customBlue border-2 text-customBlue text-xl px-6 py-5";

  return (
    <Flex justify="space-between">
      <Breadcrumb
        className="text-2xl font-semibold"
        separator=">"
        items={BreadcrumbItems}
      />
      <Flex gap="middle">
        <Button
          variant="outlined"
          onClick={showDiscardModal}
          className="border-customBlue border-2 text-customBlue text-2xl px-8 py-6"
        >
          Discard
        </Button>
        <Button
          onClick={handleSaveBttn}
          className="bg-customBlue text-white text-2xl px-8 py-6"
        >
          Save
        </Button>
        {/* <CloseSquareOutlined className="text-customBlue text-2xl" onClick={handleCloseBttn(1)}/> */}
      </Flex>
      {/* Modals------------------------------------------------------------- */}
      <Modal
        title={<p className="text-red-600">Warning:</p>}
        open={isDiscarModalOpen}
        onCancel={handleCloseBttn.bind(null, 1)}
        closeIcon={<CloseSquareOutlined className="text-customBlue text-2xl" />}
        footer={[
          <Button
            key="1"
            className={cancelBttnStyle}
            onClick={resetHandler.bind(null, 1)}
          >
            Discard
          </Button>,
          <Button
            key="2"
            className={okBttnStyle}
            onClick={() => handleCloseBttn(1)}
          >
            Save and Exit
          </Button>,
        ]}
      >
        <p className="text-lg">
          Canceling Now will delete all entered information. Proceed?
        </p>
      </Modal>
      {/* profile incomplete */}
      <Modal
        title="Profile Incomplete"
        open={isWarningModalOpen}
        onCancel={handleCloseBttn.bind(null, 2)}
        closeIcon={<CloseSquareOutlined className="text-customBlue text-2xl" />}
        footer={[
          <Button
            key="1"
            className={cancelBttnStyle}
            onClick={resetHandler.bind(null, 2)}
          >
            Discard
          </Button>,
          <Button
            key="2"
            className={okBttnStyle}
            onClick={() => handleCloseBttn(2)}
          >
            Finish Later
          </Button>,
        ]}
      >
        <p className="text-lg">
          The profile is incomplete. Do you want to save your progress and
          finish later, or discard your changes?
        </p>
      </Modal>
      {/* Success */}
      <Modal
        title={<p className="text-green-600">Success</p>}
        open={isSuccessModalOpen}
        onCancel={handleCloseBttn.bind(null, 3)}
        closeIcon={<CloseSquareOutlined className="text-customBlue text-2xl" />}
        footer={[
          <Button
            key="1"
            className={cancelBttnStyle}
            onClick={resetHandler.bind(null, 3)}
          >
            View Profile
          </Button>,
          <Button
            key="2"
            className={okBttnStyle}
            onClick={() => resetHandler(3)}
          >
            Create another Employee
          </Button>,
        ]}
      >
        <p className="text-lg">
          The employee profile has been created successfully.
        </p>
      </Modal>
    </Flex>
  );
};
export default BreadcrumbAndButtons;
