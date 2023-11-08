import { type RouteProps } from "react-router-dom"
import { LoginPage } from "@pages/LoginPage"

enum AppRoutes {
    LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: '/login'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />
    },
}