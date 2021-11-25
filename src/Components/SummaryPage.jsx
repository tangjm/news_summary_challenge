import PropTypes from 'prop-types';

import ArticleBlock from './ArticleBlock';
import ArticleText from './ArticleText';
import ArticleModel from '../utils/ArticleModel';

const SummaryPage = ({ articleArr, selectArticle, articleId }) => {

	// find the article with 'articleId' among the array of articles
	// extract its title, thumbnail and bodyText
	// pass them to ArticleBlock and ArticleText

	// /search?api-key=9b1e6ba1-be68-477c-93c3-557596c7121f&show-fields=thumbnail,bodyText&type=article
	// /search?api-key=9b1e6ba1-be68-477c-93c3-557596c7121f&show-fields=thumbnail,bodyText&ids={}

	const articleToDisplay = articleArr.find(currentArticle => currentArticle.id === articleId);
	const articleObj = articleToDisplay ? new ArticleModel(articleToDisplay.id,
		articleToDisplay.webTitle,
		articleToDisplay.fields.thumbnail,
		articleToDisplay.fields.bodyText
	) : { error: "Unexpected article object" };

	return (
		<>
			<ArticleBlock article={articleObj} selectArticle={selectArticle} />
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
			})
		})
	),
	articleId: PropTypes.string
}

export default SummaryPage;
