import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";

interface User {
    id: string;
    name: string;
}

interface TypeaheadProps {
    options: User[];
    onChange: (e: { target: { value: string } }) => void;
    defaultValue?: string; // Nuevo valor por defecto que corresponde al `id`
    placeholder?: string;
}

const Typeahead: React.FC<TypeaheadProps> = ({
    options,
    onChange,
    defaultValue,
    placeholder,
}) => {
    const [query, setQuery] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<User[]>([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Filtra y selecciona el nombre basado en el `id` por defecto
    useEffect(() => {
        if (defaultValue) {
            const defaultOption = options.find(
                (option) => option.id === defaultValue
            );
            if (defaultOption) {
                setQuery(defaultOption.name); // Muestra el nombre en el input
            }
        }
    }, [defaultValue, options]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 0) {
            const filtered = options.filter((option) =>
                option.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
            setDropdownVisible(true);
        } else {
            setFilteredOptions([]);
            setDropdownVisible(false);
        }
    };

    const handleOptionSelect = (option: User) => {
        setQuery(option.name); // Mostramos el nombre en el input
        setDropdownVisible(false);
        onChange({ target: { value: option.id } }); // Simulamos el evento para enviar el `id`
    };

    return (
        <>
            <TextInput
                id="amount"
                type="text"
                name="amount"
                value={query}
                className="block w-full mt-1"
                autoComplete="amount"
                isFocused={true}
                onChange={handleInputChange}
                required
            />
            {isDropdownVisible && filteredOptions.length > 0 && (
                <ul className="border-gray-300 rounded-md shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600">
                    {filteredOptions.map((option) => (
                        <li
                            key={option.id}
                            onClick={() => handleOptionSelect(option)}
                            className="px-4 py-2 cursor-pointer hover:bg-indigo-500 hover:text-white"
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Typeahead;
