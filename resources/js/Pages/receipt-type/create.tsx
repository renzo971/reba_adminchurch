import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Form from "./form";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
export default function Create({ auth }: PageProps<{}>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("receipt-types.store"), {
            onFinish: () => reset("name"),
        });
    };
    const lastpage = {
        link: "receipt-types.index",
        label: "Tipos de Recibo",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Crear Comprobante
                </h2>
            }
        >
            <Head title="Crear usuario" />

            <Head title="Crear tipo de recibo" />
            <Breadcrumb
                pageName="Registrar tipo de recibo"
                lastpage={lastpage}
            />

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
