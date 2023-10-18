import { useState } from "react"

function App() {
	const ratingValues = [1, 2, 3, 4, 5]
	const [selectedRating, setSelectedRating] = useState(0)
	const [submitted, setSubmitted] = useState(false)

	return (
		<>
			{!submitted ? (
				<div className="container">
					<div className="star-icon round-btn">
						<img src="/icon-star.svg" />
					</div>
					<h2 className="header">How did we do?</h2>
					<div className="content">
						Please let us know how we did with your support request.
						All feedback is appreciated to help us improve our
						offering!
					</div>
					<div className="ratings">
						{ratingValues.map((r) => (
							<button
								className={`rating round-btn selectedRating ${
									selectedRating == r ? "selected" : ""
								}`}
								onClick={() => setSelectedRating(r)}
							>
								{r}
							</button>
						))}
					</div>
					<button
						className="submit-btn"
						onClick={() => setSubmitted(true)}
					>
						SUBMIT
					</button>
				</div>
			) : (
				<div className="container with-selected-rating">
					<div className="illustration-thank-you">
						<img src="/illustration-thank-you.svg" />
					</div>
					<div className="selected-rating">
						You selected {selectedRating} out of 5
					</div>
					<h2 className="header">Thank you!</h2>
					<div className="content">
						We appreciate you taking the time to give a rating. If
						you ever need more support, don’t hesitate to get in
						touch!
					</div>
				</div>
			)}
		</>
	)
}

export default App
