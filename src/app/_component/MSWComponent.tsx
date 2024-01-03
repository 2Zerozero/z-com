'use client';

import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    // window 가 undefined 가 아니다 => 클라이언트 환경, 즉 브라우저 일때만 돌아가도록 보장해줘야한다.
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        require('@/mocks/browser');
      }
    }
  }, []);

  return null;
};
