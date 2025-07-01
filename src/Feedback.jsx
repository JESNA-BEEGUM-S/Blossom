
import React, { useState } from 'react';

function feedback() {
    const [feedback, setFeedback]= useState(``);
    const [ topic, setTopic ]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback", feedback);
        console.log("topic", topic);
    }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor=''> Feedback</label>
                    <textarea name="" value={feedback} onChange={(e) => setFeedback(e.target.value)} > </textarea>

                    <select
                        id="Topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    >
                        <option value="">Select a topic</option>
                        <option value="website">website</option>
                        <option value="support">support</option>
                        <option value="features">features</option> 

                    </select>  

                    <button type="submit">submit</button>

                </form>
            </>
        );
    }

    export default feedback
