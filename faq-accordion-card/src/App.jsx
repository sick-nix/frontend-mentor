import { useState } from "react"

function App() {
	const items = [
		{
			title: "How many team members can I invite?",
			description:
				"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
		},
		{
			title: "What is the maximum file upload size?",
			description:
				"No more than 2GB. All files in your account must fit your allotted storage space.",
		},
		{
			title: "How do I reset my password?",
			description:
				"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
		},
		{
			title: "Can I cancel my subscription?",
			description:
				"Yes! Send us a message and we'll process your request no questions asked.",
		},
		{
			title: "Do you provide additional support?",
			description:
				"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
		},
	]
	const [selected, setSelected] = useState(null)

	return (
		<>
			<div className="container">
				<div className="images-container">
					<div className="images-overflow">
						<img
							className="illustration"
							src="/illustration-woman-online-desktop.svg"
						/>
						<img
							className="illustration-pattern"
							src="/bg-pattern-desktop.svg"
						/>
					</div>
					<img
						className="illustration-box"
						src="/illustration-box-desktop.svg"
					/>
				</div>
				<div className="accordion">
					<h1 className="header">FAQ</h1>
					<ul className="list">
						{items.map((item, index) => (
							<li
								className={`list-item ${
									index == selected ? "selected" : ""
								}
								`}
								onClick={() => setSelected(index)}
							>
								<div className="title">
									<span>{item.title}</span>
									<img src="/icon-arrow-down.svg" />
								</div>

								<div
									className={`description ${
										selected == index && "show"
									}`}
								>
									{item.description}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export default App
