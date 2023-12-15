import styles from '@/app/(afterLogin)/home/home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from './_component/TabProvider';
import PostForm from './_component/PostForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
