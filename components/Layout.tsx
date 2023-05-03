import Sidebar from "./Layout/Sidebar"
interface LayoutProps {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-screen bg-black">
            <div className="container h-full max-w-6xl mx-auto xl:px-30">
                <div className="grid h-full grid-cols-4">
                    <Sidebar />
                    <div className="col-span-3 border-x-[1px] lg:col-span-2 border-neutral-800">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout