import { FaSpinner } from "react-icons/fa";
export const Loader = ({ size = 24, className = "" }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <FaSpinner
        size={size}
        className={`animate-spin text-gray-600 ${className}`}
        aria-label="Loading"
      />
    </div>
  );
};
