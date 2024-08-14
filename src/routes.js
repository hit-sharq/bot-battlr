import App from "./App";
import BotCollection from "./components/BotCollection";
import BotSpecs from "./components/BotSpecs";
import ErrorPage from "./components/ErrorPage";

const routes = [
    { 
    path: "/bot-battlr",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
        {
            path:"/bot-battlr",
            element:<BotCollection/>},
         
        {
            path:"/bot-battlr/:id",
            element:<BotSpecs/>
        }

    ]

    }];
export default routes;
