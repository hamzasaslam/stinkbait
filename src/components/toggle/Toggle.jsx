import React from 'react';

const Toggle = () => {
  return (
    <>
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .toggle-button {
          
          margin-right:10px;
         

          display: inline-block;
          border-radius: 25px;
          background-color: #ccc;
          overflow: hidden;
        }

        input[type="radio"] {
          display: none;
        }

        label {
          
          display: inline-block;
          padding: 12px 20px;
          width: 110px;
          height: 50px;
          background-color: #ccc;
          color: #000;
          font-size:20px;
          
          padding:10px 15px;
          font-family: Red Hat Display, sans-serif;
          cursor: pointer;
          border-radius: 25px;
          transition: background-color 1s ease-in-out;
        }

        input[type="radio"]:checked + label {
          background-color: #0dc73c;
          color: #fff;
          box-shadow: #0dc73c;
        }
        `}
      </style>

      <div className="toggle-button">
        <input type="radio" id="monthly" name="toggle" defaultChecked />
        <label htmlFor="monthly">Monthly</label>
        <input type="radio" id="annually" name="toggle" />
        <label htmlFor="annually">Annually</label>
      </div>
    </>
  );
};

export default Toggle;
