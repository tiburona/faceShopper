import React from 'react'
import _ from 'lodash'

export default function AddFace({handleChange, handleSubmit, selectedFace }) {
   
    const quantity = selectedFace.quantity
    const options = _.range(quantity + 1)

    return (
        <div className="form-container">
            <form onSubmit={(evt) => {handleSubmit(selectedFace, evt)}}>
                <legend>Select a quantity:</legend>
                <div>
                    <select
                        className="form-control"
                        id="quantity"
                        value="1"
                        onChange={handleChange}>
                            {options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            )) }
                    </select>
                </div>
                <button type="submit" className="btn btn-danger">Add to Cart</button>
            </form>
        </div>
    )
}
