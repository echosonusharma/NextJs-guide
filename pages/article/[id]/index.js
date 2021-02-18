// import { useRouter } from 'next/router';

import Link from "next/link";
import ArticleStyle from '../../../styles/articles.module.css';




const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <>
            <div className={ArticleStyle.blog}>
                <div>Blog No: {article.id} </div>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <Link href="/" ><h4 className={ArticleStyle.back}> &larr; Go Back </h4></Link>
            </div>
        </>
    )
};


/*
you can use this way for rendering pages using useRouter
we can use use fetch inside useEffect to do it but gonna
use the data fetching methods that next.js provides for pages
*/


// export const getServerSideProps = async (context) => {
//     const res = await
//         fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

/*
getServerSideProps gets the data at request/fetch time so it's slower 
*/

export const getStaticProps = async (context) => {
    const res = await
        fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const articles = await res.json()

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }

}



export default article;