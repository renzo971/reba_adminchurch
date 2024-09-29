interface SelectProps {
    options: { id: number; name: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
    return (
        <div className="relative">
            <select
                id="custom-select"
                value={value}
                onChange={onChange}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
                <option selected>Elige una opción</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
