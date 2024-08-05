export default function UserInput({onChange, userInput}) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="i-investment">Initial Investment</label>
					<input
						id="i-investment"
						type="number"
						required
						value={userInput.initialInvestment}
						onChange={(event) =>
							onChange("initialInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="a-investment">Annual Investment</label>
					<input
						id="a-investment"
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							onChange("annualInvestment", event.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="e-return">Expected Return</label>
					<input
						id="e-return"
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={(event) => onChange("expectedReturn", event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="duration">Duration</label>
					<input
						id="duration"
						type="number"
						required
						value={userInput.duration}
						onChange={(event) => onChange("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
