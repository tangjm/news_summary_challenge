import PropTypes from 'prop-types';

const ArticleText = ({ bodyText }) => {
	return (
		<p>{bodyText}</p>
	)
}

ArticleText.propTypes = {
	bodyText: PropTypes.string
}

export default ArticleText;
