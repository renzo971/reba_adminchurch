import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

interface incomeTypeprops {
    id: number;
    name: string;
}
export default function Edit({
    auth,
    incomeType,
}: PageProps<{ incomeType: incomeTypeprops }>) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: incomeType.name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("income-types.update", incomeType.id), {
            onFinish: () => reset("name"),
        });
    };
    const lastpage = {
        link: "income-types.index",
        label: "Tipos de ingreso",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Editar Tipo de ingreso
                </h2>
            }
        >
            <Head title="Editar tipo de ingreso" />
            <Breadcrumb
                pageName="Editar tipo de ingreso "
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
