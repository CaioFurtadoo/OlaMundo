import { Outlet } from "react-router-dom"
import { Banner } from "../Banner"

export const PaginaPadrao = () => {
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}