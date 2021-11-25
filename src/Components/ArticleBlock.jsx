import ArticleTitle from "./ArticleTitle";

const ArticleBlock = () => {
	const tempThumnail = "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png";
	return (
		<div>
			<img src={tempThumnail} alt="article thumnail" />
			<ArticleTitle />
		</div>
	)
}

export default ArticleBlock;
