import { Routes, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { Context } from "../index";
import CardGroupPage from "../pages/CardGroupPage";

const AppRouter = () => {
    const { user } = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user._isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<CardGroupPage />} />
        </Routes>
    );
};
export default AppRouter;
