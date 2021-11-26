import PropTypes from 'prop-types';

const ArticleTitle = ({ headline, url }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<h2>{headline}</h2>
		</a>
	)
}

ArticleTitle.propTypes = {
	headline: PropTypes.string,
	url: PropTypes.string
}

export default ArticleTitle;