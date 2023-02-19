import { Route, Routes } from "react-router-dom";

interface Props {
    children : JSX.Element [] | JSX.Element;
}

const RoutesWithNotFound = ({children} : Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<>NOT FOUND</>} />
        </Routes>
    );
}
 
export default RoutesWithNotFound;