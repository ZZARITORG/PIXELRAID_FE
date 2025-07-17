import { useModal } from "../../../hooks/useModal";
import Modal from "./Modal";

const ModalProvider = () => {
  const { isOpen, props, closeModal } = useModal();

  if (!isOpen || !props) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999,
      }}
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Modal key={props.title} {...props} />
      </div>
    </div>
  );
};

export default ModalProvider;
