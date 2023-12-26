const root = ReactDOM.createRoot(document.querySelector('#root'))
function Counter() {
    return (
        <div className="counter">
            <button>-</button>
            <h4>0</h4>
            <button>+</button>
            <button>C</button>
            <button>X</button>
        </div>
    )
}

function App(){
    return (
        <div>
            <p class="h1"><h3>Today : {new Date().toDateString()}</h3>
            </p>
            <br></br>
            <div className="sum">
                <h1 id="sum">SUM = 0</h1>
                <button className="button">Add Counter</button>
            </div>
            <Counter />
        </div>
    );
}

root.render(<App />);

