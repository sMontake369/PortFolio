import React, { useState } from "react";
import styles from "./modal.module.css";

type Props = {
  close: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = props => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown) {
      props.close(e);
    }
    setIsMouseDown(false);
  };

  return (
    <div>
      <div
        className={styles.modal}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div>
          {React.cloneElement(props.children as React.ReactElement, {
            close: props.close
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
