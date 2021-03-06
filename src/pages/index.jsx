import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";

const Home = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>IndexPage</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
