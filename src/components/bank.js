import { useState } from 'react';
function Bank() {
    const [balance, setBalance] = useState(0)
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleDeposit = () => {
        if (amount == '')
            setError('Please provide an input value')
        else
            setError('')
        if (amount > 0) {
            setBalance(amount);
        }
        else {
            setError('Please provide positive value')
        }

    }
    const handleWithdraw = () => {
        if (amount == '')
            setError('Please provide an input value')
        else
            setError('')
    }
    return (
        <div style={{ padding: "30px 0" }}>
            <h3><small>Mini Bank Assignment</small></h3>
            <p><strong>Available Balance: {balance}</strong></p>
            <input className="form-control w-25 d-inline" onChange={(e) => handleChange(e)} placeholder="Enter an Amount" type="text" />
            <p style={{ color: "red" }}>{error}</p>
            <button className="btn btn-primary" onClick={handleDeposit}>Deposit</button>
            <button className="btn btn-info m-2" onClick={handleWithdraw}>Withdraw</button>
        </div>
    )
}
export default Bank;