import React, {useState} from 'react';
import { Label } from '../Label/Label';
import { PopupList } from '../PopupList/PopupList';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';
import { useDetail } from '../../context/DetailContext';
import { useDrag } from 'react-dnd';

export const Card = ({ id, text, titleValue, labels, src, description }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "li",
    item: {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const [isShowEditButton, setIsShowEditButton] = useState(false);
  const [isShowPopupList, setIsShowPopupList]= useState(false);
  const { isShowDetailItem, onClickDetail } = useDetail();

  const onMouseEnter = () => {
    setIsShowEditButton(true);
  };

  const onMouseLeave = () => {
    setIsShowEditButton(false);
  };

  const handleClickDetail = () => {
    onClickDetail(id, text, titleValue, src, description);
  }

  const onClickButtonEdit = (event) => {
    event.stopPropagation();
    setIsShowPopupList(true);
  }

  return (
    <li ref={drag}
      className={`relative ${isShowDetailItem ? '' : 'z-20'} mx-1 my-2 bg-white text-[#1d284c] leading-snug cursor-pointer hover:outline hover:outline-2 hover:outline-[#5881fd] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)] ${isDragging ? 'opacity-25' : 'opacity-100'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClickDetail}
    >
      {
        src && <figure className="flex items-center"><img className="sm:max-h-36 max-h-52 w-full rounded-t-lg" src={src} alt="***" /></figure>
      }
      <div className="p-2">
        {
          labels && (
            <aside className="mt-0.5 mb-1.5 flex">
              {labels.map(oneLabel => (
                <Label
                  color={oneLabel.color}
                  title={oneLabel.title}
                  key={oneLabel.id}
                />
              ))}
            </aside>
          )
        }
        <p className="outline-none text-[#172b4d]">
          { text }
        </p>
          {
            (description) &&
              <aside className="mb-0.5 mt-1.5 flex gap-1.5">
                {
                  (description) && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <title>Tato karta má popis</title>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                  )
                }
              </aside>
          }
      </div>
      {isShowPopupList && <PopupList />}
      {isShowEditButton && <ButtonEdit onClickButtonEdit={onClickButtonEdit} />}
    </li>
  )
}