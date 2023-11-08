import { RouteConfig } from "@shared/config/routeConfig/routeConfig"
import { Route, Routes } from "react-router-dom"



export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>
                    )}
                    path={path}
                />
            ))}
        </Routes>
    )
}
