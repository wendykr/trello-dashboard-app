import React, { useState } from 'react';
import dayjs from 'dayjs';
import { ButtonClose } from '../ButtonClose/ButtonClose';

export const FormDataTime = ({ dateStart, dateEnd, setIsShowFormDateTime, onSaveDateStart, onSaveDateEnd }) => {

  const [currentDateStart, setCurrentDateStart] = useState(dateStart ? dayjs(dateStart).format('YYYY-MM-DD') : '');
  const [currentDateEnd, setCurrentDateEnd] = useState(dateEnd ? dayjs(dateEnd).format('YYYY-MM-DD') : dayjs().add(1, 'day').format('YYYY-MM-DD'));
  const [currentTimeEnd, setCurrentTimeEnd] = useState(dateEnd ? dayjs(dateEnd).format('HH:mm') : dayjs().format('HH:mm'));
  const [isDisabled, setIsDisabled] = useState(true);

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
    setIsShowFormDateTime(false);
    onSaveDateStart(currentDateStart);
    onSaveDateEnd(currentDateEnd, currentTimeEnd);
  }

  const handleClickDelete = (event) => {
    event.preventDefault();
    onSaveDateStart('');
    onSaveDateEnd('', '');
    setIsShowFormDateTime(false);
  }

  const handleCheckboxChange = () => {
    setIsDisabled(!isDisabled);
  }

  const valueStart = (dateStart) ? currentDateStart : (isDisabled) ? 'DD.MM.YYYY' : dayjs().subtract(2, 'day').format('YYYY-MM-DD');

  return (
    <div className="absolute top-40 left-20 p-4 w-[350px] h-[350px] bg-white rounded-[8px] shadow-[0px_0px_6px_1px_#00000024]">
      <div className="flex justify-end">
        <ButtonClose onClickButtonClose={() => setIsShowFormDateTime(false)} />
      </div>
      <form action="" className="mt-4 flex flex-col gap-3">
        <div>
          <label className={`block text-[14px] ${(isDisabled) ? ' text-[#44546f]' : ' text-[#0c66e4]'} font-bold`} htmlFor="datum">Datum zahájení:</label>
          <input className="inline-block" type="checkbox" id="datum" name="datum" onClick={handleCheckboxChange}/> <input className="inline-block outline-none border-[#0c66e4]" type="date" id="datum" name="datum" value={valueStart} onChange={handleChangeDateStart} disabled={isDisabled} />
        </div>

        <div>
          <label className="block text-[14px] text-[#44546f] font-bold" htmlFor="datum">Termín:</label>
          <div className="flex gap-2">
            <input className="inline-block" type="checkbox" id="datum" name="datum" /> <input className="inline-block" type="date" id="datum" name="datum" value={currentDateEnd} onChange={handleChangeDateEnd} />
            <input type="time" id="datum" name="datum" value={currentTimeEnd} onChange={handleChangeTimeEnd} />
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