import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

interface Userprops {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
export default function Edit({ auth, user }: PageProps<{ user: Userprops }>) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("users.update", user.id), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };
    const lastpage = {
        link: "users.index",
        label: "Usuarios",
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
