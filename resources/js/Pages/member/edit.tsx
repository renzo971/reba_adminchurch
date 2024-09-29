import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Form from "./form";

interface Memberprops {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}
export default function Edit({
    auth,
    member,
}: PageProps<{ member: Memberprops }>) {
    console.log(member);

    const { data, setData, put, processing, errors, reset } = useForm({
        name: member.name,
        address: member.address,
        phone: member.phone,
        email: member.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("members.update", member.id), {
            onFinish: () => reset("name", "email"),
        });
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

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="py-12">
                                <div className="max-w-full mx-auto space-y-6 sm:px-6 lg:px-8">
                                    <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                                        <div className="w-full">
                                            <div className="sm:flex sm:items-center">
                                                <div className="sm:flex-auto">
                                                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                                                        Editar Miembro
                                                    </h1>
                                                </div>
                                                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                                    <Link
                                                        type="button"
                                                        href={route(
                                                            "members.index"
                                                        )}
                                                        className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    >
                                                        Atrás
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flow-root">
                                                <div className="mt-8 overflow-x-auto">
                                                    <div className="max-w-xl py-2 align-middle">
                                                        <form
                                                            onSubmit={submit}
                                                            className="mt-6 space-y-6"
                                                        >
                                                            <Form
                                                                setData={
                                                                    setData
                                                                }
                                                                errors={errors}
                                                                data={data}
                                                                processing={
                                                                    processing
                                                                }
                                                            ></Form>
                                                        </form>
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
            </div>
        </AuthenticatedLayout>
    );
}
