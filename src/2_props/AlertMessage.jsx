import { FaCheckCircle } from "react-icons/fa";

const AlertMessage = ({ alertType, message, icon }) => {
  return (
    <>
      {message && alertType && (
        <div className={`alert ${alertType}`}>
          <span>{icon ? icon : <FaCheckCircle />} </span>

          {message}
        </div>
      )}
    </>
  );
};

export default AlertMessage;
