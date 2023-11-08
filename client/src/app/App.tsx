import { Navbar } from "@widgets/Navbar"
import { AppRouter } from "./providers/router/ui/AppRouter"

import "./styles/index.scss"

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    )
}

export default App