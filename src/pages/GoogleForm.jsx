import React from "react";
import useWindowDimensions from "../components/useWindowDimensions";

export default function GoogleForm(props) {
	const { width } = useWindowDimensions();
	const formWidth = width < 640 ? width : 640;
	console.log({ formWidth });
	return (
		<div className="iframe-container">
			<iframe
				title="google-form"
				src={props.formUrl}
				width={formWidth}
				height={props.height}
				frameBorder="0"
				marginHeight="0"
				marginWidth="0"
			>
				Loading ...
			</iframe>
		</div>
	);
}