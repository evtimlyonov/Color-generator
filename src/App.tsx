import { useState } from 'react';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [data, setData] = useState([]);

  // const componentToHex = (c: number) => {
  //   const hex = c.toString(16);
  //   return hex.length === 1 ? '0' + hex : hex;
  // };

  // const rgbToHex = (r: number, g: number, b: number) => {
  //   return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  // };

  const submitHandler: React.FormEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setData(new Values(color).all(10));
  };

  return (
    <main>
      <section className='flex items-center h-24 pl-8 text-center'>
        <h3 className='mr-8 text-3xl font-semibold capitalize'>
          color generator
        </h3>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='#f15025'
            className='px-4 py-2 text-xl rounded-tl rounded-bl'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type='submit'
            className='bg-[#49a6e9] capitalize py-2 px-4 text-white text-xl rounded-tr rounded-br'>
            submit
          </button>
        </form>
      </section>

      <section className='min-h-[87vh] grid grid-cols-testCol grid-rows-testRow'>
        {data.map((c, index) => (
          <article
            key={index}
            className={`py-4 px-8 cursor-pointer ${index > 10 && 'text-white'}`}
            style={{ backgroundColor: `rgb(${c.rgb})` }}>
            <p className='percent-value'>{c.weight}%</p>
            <p className='color-value'>#{c.hex}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
