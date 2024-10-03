import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Select from "@/Components/Select";
import TextInput from "@/Components/TextInput";
import Typeahead from "@/Components/Typeahead";
import { Link } from "@inertiajs/react";

export default function Form({
    setData,
    errors,
    data,
    processing,
    type,
    users,
}: any) {
    const handleChange = (e: any) => {
        const decimalValue = parseFloat(e.target.value); // Convert to decimal
        setData({ ...data, amount: decimalValue });
    };

    return (
        <div className="p-6.5">
            <div className="mt-4">
                <InputLabel
                    htmlFor="tipo"
                    value="Tipo"
                    className="dark:text-gray-800"
                />

                <Select
                    options={type} // Asegúrate de que 'type' sea un array con objetos { value, label }
                    value={data.income_type_id}
                    onChange={(e) => setData("income_type_id", e.target.value)}
                />

                <InputError message={errors.income_type_id} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="Miembro"
                    value="Miembro"
                    className="dark:text-gray-800"
                />

                <Typeahead
                    options={users}
                    defaultValue={data.member_id} // Pasa el `id` preseleccionado
                    onChange={(e) =>
                        setData({ ...data, member_id: e.target.value })
                    } // Actualiza el `member_id`
                    placeholder="Selecciona un usuario"
                />

                <InputError message={errors.member_id} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="monto"
                    value="Monto"
                    className="dark:text-gray-800"
                />
                <TextInput
                    id="amount"
                    type="number"
                    name="amount"
                    value={data.amount}
                    className="block w-full mt-1"
                    autoComplete="amount"
                    isFocused={true}
                    onChange={handleChange}
                    required
                />

                <InputError message={errors.amount} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="Descripcion"
                    value="Descripcion"
                    className="dark:text-gray-800"
                />

                <TextInput
                    id="description"
                    type="text"
                    name="description"
                    value={data.description}
                    className="block w-full mt-1"
                    autoComplete="description"
                    onChange={(e) => setData("description", e.target.value)}
                    required
                />

                <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Registrar ingreso
                </PrimaryButton>
            </div>
        </div>
    );
}
