import './index.css'
const Cards = () => {
    return (
        <div id="cardConteiner">
            <div id='cardFront'>
                <h1>BBVA</h1>
                <span><p>---- ---- ---- ----</p></span>
                <span><p>0/0</p></span>
                <span><p>Name</p></span>

            </div>
            <div id='cardBack'>
                <div id='emptyDiv'></div>
                <span><p>---</p></span>

            </div>
        </div>
    )
};

export {Cards};