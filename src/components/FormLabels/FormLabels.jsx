import { useState } from 'react';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import { colorsData } from '../../constants/colors';
import { LabelItem } from '../LabelItem/LabelItem';

export const FormLabels = ({ id, labelsDatabase, setIsShowFormLabels, checkedLabel, onChangeLabel, onAddNewLabelsDatabase }) => {

  const [isShowCreateLabel, setIsShowCreateLabel] = useState(false);
  const [customColor, setCustomColor] = useState('90c94f');
  const [labelTitle, setLabelTitle] = useState('');

  const handleClick = () => {
    if (isShowCreateLabel) {
      setIsShowCreateLabel(false);
      onAddNewLabelsDatabase(id, customColor);
    } else {
      setIsShowCreateLabel(true);
    }
  }

  const handleClickReset = () => {
    setCustomColor('');
  }

  const handleColorSelection = (color) => {
    setCustomColor(color);
  }

  return (
    <div className="absolute top-40 left-20 p-4 w-[350px] h-auto bg-white rounded-[8px] shadow-[0px_0px_6px_1px_#00000024]">
      <div className="flex justify-center">
        <h2 className="px-[10px] w-full h-10 text-base text-[#44546f] font-semibold flex justify-center items-center">{isShowCreateLabel ? 'Vytvořit štítek' : 'Štítky'}</h2>
        <ButtonClose onClickButtonClose={() => setIsShowFormLabels(false)} />
      </div>
      <div className="my-4 flex flex-col gap-2">
        {
          isShowCreateLabel ? (
            <>
              <div className="py-8 mx-[-16px] bg-[#f7f9fa]">
                <p className="px-2 mx-auto h-8 w-[calc(100%-32px)] text-[14px] font-medium text-[#172b4d] rounded-[3px] flex items-center" style={{ backgroundColor: `#${customColor}` }}>{labelTitle}</p>
              </div>
              <>
                <label htmlFor="labelTitle" className="mt-3 mb-2 text-[12px] text-[#44546f] font-semibold">Název štítku</label>
                <input className="" type="text" id="labelTitle" name="fname" onChange={(e) => setLabelTitle(e.target.value)} />
              </>
              <p className="mt-3 mb-2 text-[12px] text-[#44546f] font-semibold">Vybrat barvu</p>
                <div className="flex row flex-wrap gap-1 justify-center items-center">
                  {colorsData.map(color => (
                    <span className={`flex justify-center items-center rounded-[3px] border-solid border-2 ${(color.color === customColor) ? ' border-[#0c66e4]' : ' border-[#ffffff]'}`} key={color.id}>
                      <button
                        className={`m-0.5 w-12 h-8 rounded-[3px] :hover-cursor-pointer`}
                        title={color.name}
                        style={{ backgroundColor: `#${color.color}` }}
                        onClick={() => handleColorSelection(color.color)}
                      >{" "}</button>
                    </span>
                  ))}
                </div>
            </>
          ) : (
            labelsDatabase.map((label, index) => (
              <LabelItem
                id={label.id}
                color={label.color}
                title={label.title}
                key={index}
                isCheckedLabel={checkedLabel.includes(label.id)}
                onChangeLabel={onChangeLabel}
              />
            ))
          )
        }
      </div>
      <button
        className="px-3 py-1.5 w-full bg-[#f2f3f5] hover:bg-[#e5e6ea] text-[16px] text-[#44546f] font-bold rounded-[3px]"
        onClick={isShowCreateLabel ? handleClickReset : handleClick}
      >
        {isShowCreateLabel ? 'Odstranit barvu' : 'Vytvořit nový štítek'}
      </button>
      {
        isShowCreateLabel && (
          <>
            <hr className="my-4" />
            <button
              className="px-3 py-1.5 bg-[#0c66e4] hover:bg-[#0055cc] text-[16px] text-white font-bold rounded-[3px]"
              onClick={handleClick}
            >
              Vytvořit
            </button>
          </>
        )
      }
    </div>
  )
}