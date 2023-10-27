import {
    ADMIN_ROUTE,
    CARD_GROUP_ROUTE,
    CARD_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_PAGE_ROUTE,
    REG_ROUTE,
} from "./utils/consts";
import PersonalPage from "./pages/PersonalPage";
import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import CardPage from "./pages/CardPage";
import CardGroupPage from "./pages/CardGroupPage";


export const authRoutes = [

    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: PERSONAL_PAGE_ROUTE,
        Component: PersonalPage
    }
]

export const publicRoutes = [
    {
        path: CARD_GROUP_ROUTE,
        Component: CardGroupPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    },
    {
        path: CARD_ROUTE + '/:id',
        Component: CardPage
    },
]