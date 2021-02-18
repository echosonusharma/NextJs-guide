import ArticleList from "../components/ArticleList";
import styles from '../styles/Home.module.css';

export default function Home({ articles }) {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://nextjs.org" target="_blank">Next.js </a> Blog
        </h1>
      <ArticleList articles={articles} />
    </main>
  )
}


/*
basic three methods of fetching data in Next.js

1> getStaticProps -- which will allow us to fetch at build time

2> getServerSideProps -- which will allow us to fetch data at 
request time(which is slower)

3> getStaticPaths -- to dynamically generate paths based on the data we are fetching

*/

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}