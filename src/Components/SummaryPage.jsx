import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';

import ArticleBlock from './ArticleBlock';
import ArticleText from './ArticleText';
import ArticleModel from '../utils/ArticleModel';

const SummaryPage = ({ articleArr }) => {

	const articles = articleArr;
	const { state } = useLocation();
	const { id } = useParams();

	const articleToDisplay = articles.find(currentArticle => currentArticle.id === id);
	const article = articleToDisplay ? new ArticleModel(articleToDisplay.id,
		articleToDisplay.webTitle,
		articleToDisplay.webUrl,
		articleToDisplay.fields.thumbnail,
		articleToDisplay.fields.bodyText
	) : { error: "Unexpected article object" };

	return (
		<>
			<ArticleBlock article={article} displaySummary={state.displaySummary} />
			<ArticleText bodyText={article?.text ?? article.error} />
		</>
	)
}

SummaryPage.propTypes = {
	articleArr: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string,
			type: PropTypes.string,
			sectionId: PropTypes.string,
			sectionName: PropTypes.string,
			webPublicationDate: PropTypes.string,
			webTitle: PropTypes.string,
			webUrl: PropTypes.string,
			apiUrl: PropTypes.string,
			fields: PropTypes.exact({
				thumbnail: PropTypes.string,
				bodyText: PropTypes.string
			}),
			isHosted: PropTypes.bool,
			pillarId: PropTypes.string,
			pillarName: PropTypes.string
		})
	),
}

export default SummaryPage;
