function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3];
	const scaleIcon = careType === 'light' ? '☀️' : '💧';

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleIcon}</span> : null
			)}
		</div>
	);
}

export default CareScale;
