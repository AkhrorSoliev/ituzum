import { useGlobalContext } from "../hooks/useGlobalContext";

function Modal({ id, setAmount }) {
  const { dispatch } = useGlobalContext();
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hey,</h3>
        <p className="py-4">are you sure you want to remove this product?</p>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex gap-3">
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_PRODUCT", payload: id })
                }
                type="button"
                className="btn btn-sm btn-error"
              >
                delete
              </button>
              <button onClick={() => setAmount(1)} className="btn btn-sm">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
