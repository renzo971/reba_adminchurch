import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
interface ReceiptTypeprops {
    id: number;
    name: string;
}
export default function show({
    auth,
    receiptType,
}: PageProps<{ receiptType: ReceiptTypeprops }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tipo de comprobante
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
                                        Ver Tipo de Recibo
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-700">
                                        Detalles del tipo de comprobante.
                                    </p>
                                </div>
                                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                    <Link
                                        type="button"
                                        href={route("receipt-types.index")}
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
                                                        Name
                                                    </dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {receiptType.name}
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
