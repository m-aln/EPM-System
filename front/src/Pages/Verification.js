import React, { useState } from 'react';
import background from '../Asstes/background.webp';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerificationSubmit = () => {
    // Implement your verification logic here
    console.log('Verifying code:', verificationCode); // Replace with actual logic
  };

  return (
    <div className='w-screen h-full bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
      <div className='bg-cover w-full h-screen flex justify-center items-center'>
        <div className='lg:w-[30%] md:w-[50%] sm:w-[50%] w-[80%] h-[50%] bg-[#e0e1e1] bg-opacity-75 rounded-2xl p-5'>
          <h1 className='text-[#0693be] text-3xl text-center font-medium mt-5'>Verification</h1>
          <input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            className='w-[100%] mt-20 outline-none bg-transparent border-b border-b-[#0693be] placeholder:text-[#0693be] placeholder:text-base flex justify-center mb-10 text-[#0693be]'
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button onClick={handleVerificationSubmit} className='w-[100%] border border-[#0693be] text-center text-[#0693be] hover:text-white hover:bg-[#0693be90] transition ease-in-out delay-50 p-1 rounded-xl mt-12 flex justify-center items-center'>Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;