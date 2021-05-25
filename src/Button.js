import React from "react";

export default function Button() {

    return <div className="input-group mt-3">
        <input
            type="text"
            className="form-control"
            placeholder="Enter The City Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
        />
        <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
        >
            Search
      </button>

        <button type="submit" className="current-location">
            {" "}
            <span role="img" aria-label="location">
                📍{" "}
            </span>
        </button>
    </div>
}