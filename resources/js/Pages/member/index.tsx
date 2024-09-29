import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function index({ auth, members }: any) {
    const { delete: destroy } = useForm(); // Importa el método delete de useForm
    const handleDelete = (id: number) => {
        if (confirm("¿Estás seguro de que deseas eliminar este Miembro?")) {
            destroy(route("members.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Ver miembros
                </h2>
            }
        >
            <Head title="Ver miembros" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="py-12">
                            <div className="max-w-full mx-auto space-y-6 sm:px-6 lg:px-8">
                                <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                                    <div className="w-full">
                                        <div className="sm:flex sm:items-center">
                                            <div className="sm:flex-auto">
                                                <h1 className="text-base font-semibold leading-6 text-gray-900">
                                                    Miembros
                                                </h1>
                                                <p className="mt-2 text-sm text-gray-700">
                                                    Lista completa de miembros
                                                    de la iglesia.
                                                </p>
                                            </div>
                                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                                <Link
                                                    type="button"
                                                    href={route(
                                                        "members.create"
                                                    )}
                                                    className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Crear nuevo usuario
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flow-root">
                                            <div className="mt-8 overflow-x-auto">
                                                <div className="inline-block min-w-full py-2 align-middle">
                                                    <table className="w-full divide-y divide-gray-300">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 pl-4 pr-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                >
                                                                    Nro
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 pl-4 pr-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                >
                                                                    Nombre
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 pl-4 pr-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                >
                                                                    Direccion
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 pl-4 pr-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                >
                                                                    phone
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="py-3 pl-4 pr-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                >
                                                                    Email
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-3 py-3 text-xs font-semibold tracking-wide text-left text-gray-500 uppercase"
                                                                ></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {members.map(
                                                                (
                                                                    member: any,
                                                                    index: number
                                                                ) => (
                                                                    <tr
                                                                        className="even:bg-gray-50"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <td className="py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 whitespace-nowrap">
                                                                            {index +
                                                                                1}
                                                                        </td>
                                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                                            {
                                                                                member.name
                                                                            }
                                                                        </td>
                                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                                            {
                                                                                member.address
                                                                            }
                                                                        </td>
                                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                                            {
                                                                                member.phone
                                                                            }
                                                                        </td>
                                                                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                                            {
                                                                                member.email
                                                                            }
                                                                        </td>
                                                                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                                                                            <form
                                                                                action={route(
                                                                                    "members.destroy",
                                                                                    member.id
                                                                                )}
                                                                                method="POST"
                                                                            >
                                                                                <Link
                                                                                    href={route(
                                                                                        "members.show",
                                                                                        member.id
                                                                                    )}
                                                                                    className="mr-2 font-bold text-gray-600 hover:text-gray-900"
                                                                                >
                                                                                    Show
                                                                                </Link>
                                                                                <Link
                                                                                    href={route(
                                                                                        "members.edit",
                                                                                        member.id
                                                                                    )}
                                                                                    className="mr-2 font-bold text-indigo-600 hover:text-indigo-900"
                                                                                >
                                                                                    Edit
                                                                                </Link>

                                                                                <button
                                                                                    type="button"
                                                                                    className="font-bold text-red-600 hover:text-red-900"
                                                                                    onClick={() =>
                                                                                        handleDelete(
                                                                                            member.id
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Eliminar
                                                                                </button>
                                                                            </form>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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
