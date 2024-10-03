import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

interface Memberprops {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}
export default function Edit({
    auth,
    member,
}: PageProps<{ member: Memberprops }>) {
    console.log(member);

    const { data, setData, put, processing, errors, reset } = useForm({
        name: member.name,
        address: member.address,
        phone: member.phone,
        email: member.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("members.update", member.id), {
            onFinish: () => reset("name", "email"),
        });
    };
    const lastpage = {
        link: "members.index",
        label: "Miembros",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Editar usuario
                </h2>
            }
        >
            <Head title="Editar usuario" />

            <Breadcrumb pageName="Registrar ingreso" lastpage={lastpage} />
            <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <Form
                        setData={setData}
                        errors={errors}
                        data={data}
                        processing={processing}
                    ></Form>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
