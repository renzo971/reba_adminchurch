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

        post(route("income-types.store"), {
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
                    Crear tipo de ingreso
                </h2>
            }
        >
            <Head title="Crear tipo de ingreso" />
            <Breadcrumb
                pageName="Registrar tipo de ingreso "
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
