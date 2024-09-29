import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
interface incomeProps {
    id: number;
    user_id: number;
    income_type_id: number;
    member_id: number;
    amount: number;
    description: string;
    user: {
        name: string;
    };
    member: {
        name: string;
    };
    income_type: {
        name: string;
    };
}
export default function show({
    auth,
    income,
}: PageProps<{ income: incomeProps }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Ver ingreso
                </h2>
            }
        >
            <Head title="Crear usuario" />
            <div className="py-12">
                <div className="max-w-full mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                        <div className="w-full">
                            <div className="sm:flex sm:items-center">
                                <div className="sm:flex-auto">
                                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                                        Ver Ingreso
                                    </h1>
                                </div>
                                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <Link
                                        type="button"
                                        href={route("incomes.index")}
                                        className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Atrás
                                    </Link>
                                </div>
                            </div>

                            <div className="flow-root">
                                <div className="mt-8 overflow-x-auto">
                                    <div className="inline-block min-w-full py-2 align-middle">
                                        <div className="mt-6 border-t border-gray-100">
                                            <dl className="divide-y divide-gray-100">
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                                        Registrante
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {income.user.name}
                                                    </dd>
                                                </div>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                                        Tipo de ingreso
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {
                                                            income.income_type
                                                                .name
                                                        }
                                                    </dd>
                                                </div>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                                        Miembro
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {income.member.name}
                                                    </dd>
                                                </div>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                                        Monto
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {income.amount}
                                                    </dd>
                                                </div>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">
                                                        Descripcion
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {income.description}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
