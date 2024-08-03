import { DeleteOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import { useEffect, useState } from "react";
import { IBudgetList } from "../../interfaces/Products";
interface IDeleteButton {
  item: any;
  onDeleteConfirm: (item: IBudgetList) => void;

}
const DeleteButton = ({
  item,
  onDeleteConfirm,

}: IDeleteButton) => {


  return (
    <Button
      onClick={() => onDeleteConfirm(item)}
      icon={<DeleteOutlined width={16} height={16} />}
      type="link"
      danger
    >
      {/* {isResponsive ? "" : <span className="px-1">{t("actions.delete")}</span>} */}
    </Button>
  );
};

export default DeleteButton;
