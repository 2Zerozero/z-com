import styles from '@/app/(afterLogin)/_component/post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 따라하려니 목이 빠지겠소.',
    createdAt: new Date(),
    Images: [],
  };
  return (
    <article className={styles.post}>
      <div className={styles.postWrapper}>
        {/* 포스트 유저 */}
        <div className={styles.postUserSection}>
          <Link href={`/${target.User.id}`} className={styles.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={styles.postShade} />
          </Link>
        </div>

        {/* 포스트 작성자 및 내용 */}
        <div className={styles.postBody}>
          <div className={styles.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={styles.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={styles.postUserId}>{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={styles.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div className={styles.postImageSection}>
            {/* {target.Images.length > 0 && (
              <div className={styles.postImageSection}>
                <img src={target.Images[0]?.link} alt="" />
              </div>
            )} */}
          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}
