import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link } from "@inertiajs/react";

export default function Form({ setData, errors, data, processing }: any) {
    return (
        <div className="p-6.5">
            <div className="mt-4">
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="block w-full mt-1"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="address" value="Address" />

                <TextInput
                    id="address"
                    name="address"
                    value={data.address}
                    className="block w-full mt-1"
                    autoComplete="address"
                    onChange={(e) => setData("address", e.target.value)}
                    required
                />

                <InputError message={errors.address} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="phone" value="Phone" />

                <TextInput
                    id="phone"
                    name="phone"
                    value={data.phone}
                    className="block w-full mt-1"
                    autoComplete="phone"
                    onChange={(e) => setData("phone", e.target.value)}
                    required
                />

                <InputError message={errors.phone} className="mt-2" />
            </div>
            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="block w-full mt-1"
                    autoComplete="username"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Crear miembro
                </PrimaryButton>
            </div>
        </div>
    );
}
