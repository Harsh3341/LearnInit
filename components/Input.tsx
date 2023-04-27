interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
  disabled,
  label,
}) => {
  return (
    <div className="w-full">
      {label && (
        <p className="text-xl text-white font-semibold mb-2">{label}</p>
      )}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="w-full p-4 text-lg  bg-white/30 border-2 border-black/50 rounded-md outline-none text-black focus:border-wi focus:border-2 transition disabled:bg-white-50 disabled:opacity-70 disabled:cursor-not-allowed placeholder-gray-800"
      />
    </div>
  );
};

export default Input;
