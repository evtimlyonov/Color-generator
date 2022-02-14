import { useState } from 'react';
import Values from 'values.js';
import { SingleColor } from './components/SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [data, setData] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

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
    try {
      setData(new Values(color).all(10));
      setError(false);
    } catch (err) {
      setError(true);
    }
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
            className={`px-4 py-2 text-xl rounded-tl rounded-bl outline-none ${
              error && 'border-y-2 border-l-2 border-red-500'
            }`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            type='submit'
            className={`bg-[#49a6e9] capitalize py-2 px-4 text-white text-xl rounded-tr rounded-br ${
              error && 'border-y-2 border-r-2 border-red-500'
            }`}>
            submit
          </button>
        </form>
        {error && (
          <p className='ml-10 text-xs italic text-red-500'>
            Please pick real hex.
          </p>
        )}
      </section>

      <section className='min-h-[87vh] grid grid-cols-testCol grid-rows-testRow'>
        {data.map((c, index) => (
          <SingleColor
            key={index}
            index={index}
            rgb={c.rgb}
            hex={c.hex}
            weight={c.weight}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
