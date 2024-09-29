import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Form from "./form";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";
interface incomeTypesProps {
    id: number;
    name: string;
}
interface membersProps {
    id: number;
    name: string;
}
export default function Create({
    auth,
    incomeTypes,
    members,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    incomeTypes: incomeTypesProps[];
    members: membersProps[];
}>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        income_type_id: "",
        member_id: "",
        amount: "",
        description: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("incomes.store"), {
            onFinish: () => alert("Ingreso Registrado"),
        });
    };
    const lastpage = {
        link: "incomes.index",
        label: "Ingresos",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Registrar ingreso
                </h2>
            }
        >
            <Head title="Crear Ingreso" />
            <Breadcrumb pageName="Registrar ingreso" lastpage={lastpage} />

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <Form
                        setData={setData}
                        errors={errors}
                        data={data}
                        processing={processing}
                        type={incomeTypes}
                        users={members}
                    ></Form>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
