/** @format */

import GraphPredictionApp from "./GraphPredictionApp";
import {authRoles} from "app/auth";

export const GraphPredictionAppConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    auth: authRoles.fleet,
    routes: [
        {
            path: "/graph-prediction",
            component: GraphPredictionApp,
        },
    ],
};
