import { useState } from 'react';

const Feedback = () => {
    const [score, setScore] = useState('10');
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        } 
        console.log("Form submitted");
        setComment('');
        setScore('10');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2 className='text-gray-200'>Feedback Form</h2>
                    <div>
                        <label className='text-gray-200 block'>Score: {score}</label>
                        <input
                            className='w-[200px]'
                            type="range"
                            min='0'
                            max='10'
                            value={score}
                            onChange={e=>setScore(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='text-gray-200 block'>Comment: </label>
                        <textarea
                            className='text-gray-800 px-2'
                            value={comment}
                            onChange={e=>setComment(e.target.value)}
                        />
                    </div>
                    <button disabled={Number(score) <= 5 && comment.length <= 10} className='bg-blue-500 px-2 pt-1 pb-1 rounded-lg hover:bg-white hover:shadow-sm hover:shadow-blue-200' type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Feedback;
