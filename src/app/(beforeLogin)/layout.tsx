import { ReactNode } from 'react';

export default function Layout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <div>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}
