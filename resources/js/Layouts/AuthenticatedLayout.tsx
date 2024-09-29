import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import Header from "@/Components/Header/index";
import Sidebar from "@/Components/Sidebar/index";
interface UrllinksType {
    routel: string;
    name: string;
}
export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const Linkstipes: UrllinksType[] = [
        { routel: "receipt-types.index", name: "Tipos de Recibos" },
        { routel: "expense-types.index", name: "Tipos de Gasto" },
        { routel: "income-types.index", name: "Tipos de Ingreso" },
    ];
    const Linksnavs: UrllinksType[] = [
        { routel: "dashboard", name: "Dashboard" },
        { routel: "users.index", name: "Usuarios" },
        { routel: "members.index", name: "Membrecia" },
        { routel: "incomes.index", name: "Incomes" },
    ];

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        user={user}
                    />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
    );
}
