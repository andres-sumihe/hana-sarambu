import {ReactTyped} from 'react-typed';
import './App.css';
import { useState } from 'react';
import ResponsiveSlider from './ResponsiveSlider';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTypedDone, setTypedDone] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <main className='flex px-6 md:px-0 flex-col justify-center items-center w-screen h-screen bg-[#F1E5D1] text-[#987070]'>
        <ReactTyped
          strings={['Hi ubub, I just want to tell you that I love you so much <br> I hope you have a great day today, <br> and I hope you pass the exam with a good score, <br>I believe you can do it, <br>I love you so much, ububb.']}
          typeSpeed={50}
          style={{fontSize: '1.5rem'}}
          backSpeed={0}
          showCursor={false}
          onComplete={() => {
            setTypedDone(true);
            console.log('done');
          }}
        />

        { isTypedDone && <button className="bg-[#DBB5B5] fixed bottom-5 text-[#F1E5D1] p-3 text-xl rounded-xl mt-6 animate-bounce"
        onClick={handleButtonClick}>
          🎁 Open Gift
        </button> }
      </main>
      

      {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded-lg text-center relative w-[360px]">
                <span className="absolute top-0 right-2 text-2xl cursor-pointer text-[#987070]" onClick={closeModal}>&times;</span>
                {/* Photo Carousel */}
                <ResponsiveSlider />
              </div>
            </div>
          )}

    </>
  );
}

export default App;
