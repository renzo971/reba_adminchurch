import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

interface expenseTypeprops {
    id: number;
    name: string;
}
export default function Edit({
    auth,
    expenseType,
}: PageProps<{ expenseType: expenseTypeprops }>) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: expenseType.name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("expense-types.update", expenseType.id), {
            onFinish: () => reset("name"),
        });
    };
    const lastpage = {
        link: "expense-types.index",
        label: "Tipos de egreso",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Editar Tipo de Gasto
                </h2>
            }
        >
            <Head title="Editar usuario" />
            <Breadcrumb pageName="Editar tipo de egreso" lastpage={lastpage} />

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
