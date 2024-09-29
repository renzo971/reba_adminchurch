import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";
import Breadcrumb from "@/Components/Breadcrumbs/Breadcrumb";

interface incomeTypesProps {
    id: number;
    name: string;
}
interface membersProps {
    id: number;
    name: string;
}
interface incomeProps {
    id: number;
    user_id: number;
    income_type_id: number;
    member_id: number;
    amount: number;
    description: string;
}
export default function Edit({
    auth,
    incomeTypes,
    members,
    income,
}: PageProps<{
    laravelVersion: string;
    phpVersion: string;
    incomeTypes: incomeTypesProps[];
    members: membersProps[];
    income: incomeProps;
}>) {
    const { data, setData, put, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        income_type_id: income.income_type_id,
        member_id: income.member_id,
        amount: income.amount,
        description: income.description,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("incomes.update", income.id), {
            onFinish: () => {},
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
                    Editar Ingreso
                </h2>
            }
        >
            <Head title="Editar usuario" />

            <Breadcrumb pageName="Editar ingreso" lastpage={lastpage} />

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
