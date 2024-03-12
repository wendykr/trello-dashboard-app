import React, {useState} from 'react';
import dayjs from 'dayjs';
import { Label } from '../Label/Label';
import { PopupList } from '../PopupList/PopupList';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';
import { useDetail } from '../../context/DetailContext';
import { useDrag } from 'react-dnd';

export const Card = ({ id, text, titleValue, src, description, labels, dateStart, dateEnd, done, comments, onUpdateDone }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "li",
    item: {id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const [isShowEditButton, setIsShowEditButton] = useState(false);
  const [isShowPopupList, setIsShowPopupList] = useState(false);
  const { isShowDetailItem, onClickDetail } = useDetail();

  const filteredLabels = labels
  .filter(oneLabel => oneLabel.cardId === id);

  const filteredComments = comments
  .filter(oneComment => oneComment.cardId === id);

  const onMouseEnter = () => {
    setIsShowEditButton(true);
  };

  const onMouseLeave = () => {
    setIsShowEditButton(false);
  };

  const handleClickDetail = () => {
    onClickDetail(id, text, titleValue, src, description, dateStart, dateEnd, done);
  }

  const onClickButtonEdit = (event) => {
    event.stopPropagation();
    setIsShowPopupList(true);
  }

  const handleClickDone = (event) => {
    event.stopPropagation();
    onUpdateDone(id, !done);
  }

  const styledDateEnd = done ? 'bg-green-700 text-white' : 
    dayjs(dateEnd).isAfter(dayjs()) ? '' :
      dayjs(dateEnd).isSame(dayjs(), 'day') ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white';

  const titleDateEnd = done ? 'Karta je hotová' :
    dayjs(dateEnd).isAfter(dayjs()) ? 'Karta má termín později' :
      dayjs(dateEnd).isSame(dayjs(), 'day') ? 'Karta má dnešní termín' : 'Karta je po termínu';

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
          (filteredLabels.length > 0) && (
            <aside className="mt-0.5 mb-1.5 flex">
              {filteredLabels.map(oneLabel => (
                oneLabel.label.map(objLabel => 
                  <Label
                  color={objLabel.color}
                  title={objLabel.title}
                  key={objLabel.id}
                />)
              ))}
            </aside>
          )
        }
        <p className="outline-none text-[#172b4d]">
          { text }
        </p>
          {
            (dateStart !== '' || dateEnd !== '' || description || filteredComments.length > 0) &&
              <aside className="mb-0.5 mt-1.5 flex items-center gap-2">
                {
                  (dateEnd !== '' && dateStart === '') && (
                    <span className={`px-1 py-0.5 ${styledDateEnd} rounded-[3px] flex items-center gap-1`} title={titleDateEnd} onClick={handleClickDone}>
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-[12px]">{dayjs(dateEnd).format(`DD.MM.${dayjs(dateEnd).format('YYYY') !== dayjs().format('YYYY') ? 'YYYY' : ''}`)}</span>
                    </span>
                  )
                }
                {
                  (dateEnd === '' && dateStart !== '') && (
                    <span className={`px-1 py-0.5 rounded-[3px] flex items-center gap-1`} onClick={handleClickDone}>
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-[12px]">Začátek: {dayjs(dateStart).format(`DD.MM.${dayjs(dateStart).format('YYYY') !== dayjs().format('YYYY') ? 'YYYY' : ''}`)}</span>
                    </span>
                  )
                }
                {
                  (dateEnd !== '' && dateStart !== '') && (
                    <span className={`px-1 py-0.5 ${styledDateEnd} rounded-[3px] flex items-center gap-1`} title={titleDateEnd} onClick={handleClickDone}>
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-[12px]">{dayjs(dateStart).format(`DD.MM.${dayjs(dateStart).format('YYYY') !== dayjs().format('YYYY') ? 'YYYY' : ''}`)} - {dayjs(dateEnd).format(`DD.MM.${dayjs(dateEnd).format('YYYY') !== dayjs().format('YYYY') ? 'YYYY' : ''}`)}</span>
                    </span>
                  )
                }
                {
                  (description) && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <title>Tato karta má popis</title>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                  )
                }
                {
                  (filteredComments.length > 0) && (
                    <span className="flex items-center gap-1" title="Komentáře">
                      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>
                      <span className="text-[12px]">{filteredComments.length}</span>
                    </span>
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