import React, { useEffect, useState } from 'react';
import { toast, Slide } from 'react-toastify';
import dayjs from 'dayjs';
import { ButtonClose } from '../ButtonClose/ButtonClose';

export const FormDataTime = ({ dateStart, dateEnd, setIsShowFormDateTime, onSaveDateStart, onSaveDateEnd }) => {

  const [currentDateStart, setCurrentDateStart] = useState(dateStart ? dayjs(dateStart).format('YYYY-MM-DD') : '');
  const [currentDateEnd, setCurrentDateEnd] = useState(dateEnd ? dayjs(dateEnd).format('YYYY-MM-DD') : dayjs().add(2, 'day').format('YYYY-MM-DD'));
  const [currentTimeEnd, setCurrentTimeEnd] = useState(dateEnd ? dayjs(dateEnd).format('HH:mm') : dayjs().format('HH:mm'));
  const [isDisabledStart, setIsDisabledStart] = useState(dateStart ? false : true);
  const [isDisabledEnd, setIsDisabledEnd] = useState(false);

  const handleChangeDateStart = (event) => {
    setCurrentDateStart(event.target.value);
  }

  const handleChangeDateEnd = (event) => {
    setCurrentDateEnd(event.target.value);
  }

  const handleChangeTimeEnd = (event) => {
    setCurrentTimeEnd(event.target.value);
  }

  const handleClickSave = (event) => {
    event.preventDefault();
    if (currentDateEnd && (currentDateStart > currentDateEnd)) {
      toast.error('Datum zahájení je později než termín dokončení!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    } else {
      setIsShowFormDateTime(false);
      onSaveDateStart(currentDateStart);
      onSaveDateEnd(currentDateEnd, currentTimeEnd);
    }
  }

  const handleClickDelete = (event) => {
    event.preventDefault();
    onSaveDateStart('');
    onSaveDateEnd('', '');
    setIsShowFormDateTime(false);
  }

  const handleCheckboxChangeStart = () => {
    if (isDisabledStart) {
      setCurrentDateStart(dayjs().format('YYYY-MM-DD'));
    } else {
      setCurrentDateStart('');
    }
    setIsDisabledStart(!isDisabledStart);
  }

  const handleCheckboxChangeEnd = () => {
    if (isDisabledEnd) {
      setCurrentDateEnd(dayjs().add(2, 'day').format('YYYY-MM-DD'));
      setCurrentTimeEnd(dayjs().format('HH:mm'));
    } else {
      setCurrentDateEnd('');
      setCurrentTimeEnd('');
    }
    setIsDisabledEnd(!isDisabledEnd);
  }

  return (
    <div className="absolute top-40 left-20 p-4 w-[350px] h-[350px] bg-white rounded-[8px] shadow-[0px_0px_6px_1px_#00000024]">
      <div className="flex justify-center">
        <h2 className="px-[10px] w-full h-10 text-base text-[#44546f] font-semibold flex justify-center items-center">Data</h2><ButtonClose onClickButtonClose={() => setIsShowFormDateTime(false)} />
      </div>
      <form action="" className="mt-4 flex flex-col gap-3">
        <div>
          <label className={`block text-[14px] ${(isDisabledStart) ? ' text-[#44546f]' : ' text-[#0c66e4]'} font-bold`} htmlFor="datum">Datum zahájení:</label>
          <div className="mt-2 flex gap-2 items-center">
            <input className="inline-block w-4 h-4" type="checkbox" id="datum" name="datum" onClick={handleCheckboxChangeStart} defaultChecked={!isDisabledStart} /> <input className={`inline-block p-[6px] text-[14px] uppercase outline-none border-[2px] ${(isDisabledStart) ? 'border-white text-[#091e424f] cursor-not-allowed' : 'border-[#0c66e4] cursor-text'} rounded-[3px]`} type="date" id="datum" name="datum" value={currentDateStart} onChange={handleChangeDateStart} disabled={isDisabledStart} />
          </div>
        </div>

        <div>
          <label className={`block text-[14px] ${(isDisabledEnd) ? ' text-[#44546f]' : ' text-[#0c66e4]'} font-bold`} htmlFor="datum">Termín:</label>
          <div className="mt-2 flex gap-2 items-center">
            <input className="inline-block w-4 h-4" type="checkbox" id="datum" name="datum" onClick={handleCheckboxChangeEnd} defaultChecked={!isDisabledEnd} /> <input className={`inline-block p-[6px] text-[14px] uppercase outline-none border-[2px] ${(isDisabledEnd) ? 'border-white text-[#091e424f] cursor-not-allowed' : 'border-[#0c66e4] cursor-text'} rounded-[3px] cursor-text`} type="date" id="datum" name="datum" value={currentDateEnd} onChange={handleChangeDateEnd} disabled={isDisabledEnd} />
            <input className={`inline-block p-[6px] text-[14px] uppercase outline-none border-[2px] ${(isDisabledEnd) ? 'border-white text-[#091e424f] cursor-not-allowed' : 'border-[#0c66e4] cursor-text'} rounded-[3px] cursor-text`} type="time" id="datum" name="datum" value={currentTimeEnd} onChange={handleChangeTimeEnd} disabled={isDisabledEnd} />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            className="px-3 py-1.5 w-full bg-[#0c66e4] hover:bg-[#0055cc] text-[16px] text-white font-bold rounded-[3px]"
            onClick={handleClickSave}>Uložit
          </button>
          <button
            className="px-3 py-1.5 w-full bg-[#e5e6ea] hover:bg-[#d1d4db] text-[16px] text-[#44546f] font-bold rounded-[3px]"
            onClick={handleClickDelete}>Odstranit
          </button>
        </div>
      </form>
    </div>
  );
};