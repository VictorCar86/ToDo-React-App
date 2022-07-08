import "./TodoLoading.css";

function TodoLoading(){
    return (
        <section className="TodoLoading-section">
            <ul className="TodoLoading-container">
                <li className="TodoLoading-list">Loading...</li>
                <li className="TodoLoading-list">Loading...</li>
                <li className="TodoLoading-list">Loading...</li>
            </ul>
        </section>
    )
}

export { TodoLoading };