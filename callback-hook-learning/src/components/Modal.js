import React, {forwardRef, useImperativeHandle, useState} from 'react'

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true)
  }));
  console.log('child rendered')
  if (!modalState) return null;
  return (
    <div>
      <p>Child Modal</p>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  )
}

export default forwardRef(Modal)