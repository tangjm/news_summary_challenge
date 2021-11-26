import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import ArticleSummaryBlock from './ArticleSummaryBlock';
import ArticleText from './ArticleText';
import ArticleModel from '../utils/ArticleModel';

const SummaryPage = ({ articleArr }) => {

	const { id } = useParams();

	const articleToDisplay = articleArr.find(currentArticle => currentArticle.id === id);
	const articleObj = articleToDisplay ? new ArticleModel(articleToDisplay.id,
		articleToDisplay.webTitle,
		articleToDisplay.webUrl,
		articleToDisplay.fields.thumbnail,
		articleToDisplay.fields.bodyText
	) : { error: "Unexpected article object" };

	return (
		<div>
			<ArticleSummaryBlock article={articleObj} />
			<ArticleText bodyText={articleObj.text ?? articleObj.error} />
		</div>
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
	)
}

export default SummaryPage;
