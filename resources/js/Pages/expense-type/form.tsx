import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Form({ setData, errors, data, processing }: any) {
    return (
        <>
            <div>
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

            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Registrar
                </PrimaryButton>
            </div>
        </>
    );
}
