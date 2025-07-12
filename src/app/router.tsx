import React from "react";
import {Route, Routes} from "react-router-dom";

import { Main } from "@/pages/Main"

export const RouterView = React.memo(() => {
    return (
			<Routes>
				<Route path={'/'} element={<Main />} />
			</Routes>
    )
})