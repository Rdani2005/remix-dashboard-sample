export interface ModalProps {
  title: string;
  fullScreen?: boolean;
  onClose: () => void;
  body: JSX.Element;
  footer?: JSX.Element;
}
