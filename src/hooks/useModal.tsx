import type { ModalProps } from "../components/common/modal/Modal";
import useModalStore from "../stores/modalStore";

export const useModal = () => {
  const { isOpen, changeModalStatus, changeModalProps, props } =
    useModalStore();

  const openModal = (newProps: ModalProps) => {
    changeModalStatus(true);
    changeModalProps(newProps);
  };

  const closeModal = () => {
    changeModalStatus(false);
    changeModalProps(undefined);
  };

  const setProps = (newProps: ModalProps | undefined) => {
    changeModalProps(newProps);
  };

  return { openModal, closeModal, setProps, isOpen, props };
};
