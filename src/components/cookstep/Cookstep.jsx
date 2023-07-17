import React from "react";
import styles from "./Cookstep.css";

function Cookstep(props) {
	const { step, content } = props;
	return (
		<div class="cookStepWrapper">
			<div>
				<div class="cookStepCounter">
					<div class="cookStepCounterNumber">二</div>
				</div>
				<div class="cookStepContent">
					A lot of text, even more text and even more text it's easier
					to write text than to customely sdaflkn sadflkj asdflk;j
					asdfksna dbrasl;dkfn asfdkn askdfjb sakdlfn asdlkfj sakdjf
					sakljdj sfd A lot of text, even more text and even more text
					it's easier to write text than to customely sdaflkn sadflkj
					asdflk;j asdfksna dbrasl;dkfn asfdkn askdfjb sakdlfn asdlkfj
					sakdjf sakljdj sfdA lot of text, even more text and even
					more text it's easier to write text than to customely
					sdaflkn sadflkj asdflk;j asdfksna dbrasl;dkfn asfdkn askdfjb
					sakdlfn asdlkfj sakdjf sakljdj sfdA lot of text, even more
					text and even more text it's easier to write text than to
					customely sdaflkn sadflkj asdflk;j asdfksna dbrasl;dkfn
					asfdkn askdfjb sakdlfn asdlkfj sakdjf sakljdj sfd
				</div>
			</div>
		</div>
	);
}

export default Cookstep;
