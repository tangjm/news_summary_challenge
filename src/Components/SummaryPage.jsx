import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import ArticleSummaryBlock from './ArticleSummaryBlock';
import ArticleText from './ArticleText';
import ArticleModel from '../utils/ArticleModel';

const SummaryPage = ({ articleArr }) => {

	// find the article with 'id' among the array of articles
	// extract its title, thumbnail and bodyText
	// pass them to ArticleBlock and ArticleText

	// /search?api-key=9b1e6ba1-be68-477c-93c3-557596c7121f&show-fields=thumbnail,bodyText&type=article
	// /search?api-key=9b1e6ba1-be68-477c-93c3-557596c7121f&show-fields=thumbnail,bodyText&ids={}

	const { id } = useParams();
	console.log(id);
	const articleToDisplay = articleArr.find(currentArticle => currentArticle.id === id);
	const articleObj = articleToDisplay ? new ArticleModel(articleToDisplay.id,
		articleToDisplay.webTitle,
		articleToDisplay.webUrl,
		articleToDisplay.fields.thumbnail,
		articleToDisplay.fields.bodyText
	) : { error: "Unexpected article object" };

	return (
		<>
			<ArticleSummaryBlock article={articleObj} />
			<ArticleText bodyText={articleObj.text ?? articleObj.error} />
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
	)
}

export default SummaryPage;
