import { ToastContainer, Zoom } from "react-toastify";

export function Error() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      closeButton={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      toastClassName={"border border-stone-800"}
      toastStyle={{
        fontSize: "14px",
        padding: "15px 12px",
        minHeight: "40px",
        fill: "white",
        background: "#09090b",
      }}
      theme="colored"
      transition={Zoom}
    />
  );
}
