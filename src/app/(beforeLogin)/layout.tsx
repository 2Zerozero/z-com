import { ReactNode } from 'react';
import stlyes from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={stlyes.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 z.com 일때
// children => children => page.tsx
// modal => @modal/default.tsx
