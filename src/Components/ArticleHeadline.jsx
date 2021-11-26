import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const ArticleHeadline = ({ headline, id, setDisplaySummary }) => {

	// const handleClick = () => {
	// 	setIsSummary(false);
	// }

	// fix routing by removing / from id's
	// id = id.replace(/\//g, "");
	console.log(id);
	return (
		<NavLink to={{
			pathname: `/summary/${id}`,
			state: {
				displaySingleSummary: true
			}
		}} className="link"
		// onClick={() => setDisplaySummary(true)}
		>
			<h2>{headline}</h2>
		</NavLink >
	)
}

ArticleHeadline.propTypes = {
	headline: PropTypes.string,
	id: PropTypes.string,
	setDisplaySummary: PropTypes.func
}

export default ArticleHeadline;