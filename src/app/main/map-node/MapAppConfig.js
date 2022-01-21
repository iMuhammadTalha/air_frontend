import DispatchApp from "./DispatchApp";
import { authRoles } from "app/auth";

export const MapAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.Customer_Support,
    routes: [
        {
            path: "/admin/dispatch-rides",
            component: DispatchApp
        }
    ]
};
