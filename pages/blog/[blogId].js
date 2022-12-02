import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {
  const router = useRouter();
  const id = router.query.blogId;
  return (
    <div>
      <h1>this is a dynamic page {id}</h1>
    </div>
  );
};

export default blogId;