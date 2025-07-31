import GameBoard from "./GameBoard";


function App () {
    return (
        <div className="app-container">
        <header>
            <div id="header"><h1>
                GridMaster <span>CWP</span>
            </h1></div>
        </header>
            <GameBoard/>
        </div>
    )
}

export default App;