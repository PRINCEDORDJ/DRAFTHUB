
const AlertModal = ({isOpen, onConfirm, onClose, title, message}) => {
  return (
    <div className="bg-black/50 backdrop-blur-md fixed top-0 left-0 w-full h-screen py-50 px-2 max-md:px-1 " onClick={()=>isOpen(false)}>
      <div className="bg-slate-500 flex flex-col items-center py-10 rounded-lg w-md max-md:w-xs mx-auto">
        <div>
          <h1 className="text-center text-2xl font-bold">{title}</h1>
          <p>{message}</p>
        </div>
        <div className="flex gap-3 pt-10">
          <button className="rounded-lg bg-gray-700 py-2 px-10" onClick={onClose}>Cancel</button>
          <button className="rounded-lg bg-violet-500 py-2 px-10" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default AlertModal