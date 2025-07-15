// src/components/ModalDialog.tsx
import { useRef } from "react";

const ModalDialog = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <div >
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >        Abrir Modal
      </button>

      <dialog
        ref={dialogRef}
        className="rounded-lg p-6 shadow-lg w-[90%] md:w-[400px] text-center"
      >
        <h2 className="text-xl font-bold mb-4">¡Hola, Abner! 👋</h2>
        <p className="mb-4">Este es un modal usando <code>{`<dialog>`}</code> con React + TypeScript.</p>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar
        </button>
      </dialog>
    </div>
  );
};

export default ModalDialog;
