import React, {  useState,  useContext,  cloneElement,  createContext} from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
  
  const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));
  
  const ModalContext = createContext();
  
  function Modal(props) {
    const [isOpen, setIsOpen] = useState(false);
    return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
  }
  
  function ModalDismissButton({ children: child }) {
    const [, setIsOpen] = useContext(ModalContext);
  
    return cloneElement(child, {
      onClick: callAll(() => setIsOpen(false), child.props.onClick)
    });
  }
  
  function ModalOpenButton({ children: child }) {
    const [, setIsOpen] = useContext(ModalContext);
  
    return cloneElement(child, {
      onClick: callAll(() => setIsOpen(true), child.props.onClick)
    });
  }
  
  function ModalContentsBase(props) {
    const [isOpen, setIsOpen] = useContext(ModalContext);
    return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
        {props.children}
      </Dialog>
    );
  }
  
  function ModalContents({ title, children, ...props }) {
    return (
      <ModalContentsBase {...props}>
        <div style={{ padding: "50px",   }}>
          <div css={{ display: "flex", justifyContent: "flex-end", }}>
            <ModalDismissButton>
              <i
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "24px",
                  fontFamily: "Mukta",
                  fontStyle: "normal"
                }}
              >
                x
              </i>
            </ModalDismissButton>
          </div>
          <DialogTitle style={{fontFamily: "Mukta",}}> {title} </DialogTitle>
          <p style={{fontFamily: "Mukta"}}>{children}</p>
        </div>
      </ModalContentsBase>
    );
  }
  
  export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
  