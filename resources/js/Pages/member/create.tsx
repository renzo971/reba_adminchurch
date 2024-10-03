import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Form from "./form";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
export default function Create({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        addres: "",
        phone: "",
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("members.store"), {
            onFinish: () => reset("name", "phone", "email"),
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
                    Crear miembro
                </h2>
            }
        >
            <Head title="Crear Miembro" />
            <Head title="Crear usuario" />
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
