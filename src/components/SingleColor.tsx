import { useEffect, useState } from 'react';

export const SingleColor = ({ index, rgb, hex, weight }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`py-4 px-8 cursor-pointer ${index > 10 && 'text-white'}`}
      style={{ backgroundColor: `rgb(${rgb})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
      {alert && (
        <p className='mt-2 text-xs uppercase animate-pulse'>
          copied to clipboard
        </p>
      )}
    </article>
  );
};
