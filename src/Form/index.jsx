import './index.css'
const Form = () => {

    
    return(
        <div id='userInformation'>
            <h1>Your Information</h1>
            <form>
                <label>Name</label>
                <textarea></textarea>
                <label>Credit Card Number</label>
                <textarea placeholder="0000 0000 0000 0000"></textarea>
                <label>Expiration Date</label>
                <textarea placeholder="MM/DD"></textarea>
                <label>Segurity Number</label>
                <textarea placeholder='000'></textarea>
                <button
                type='submit'
                >complete</button>
            </form>            
        </div>
    )
};

export { Form };