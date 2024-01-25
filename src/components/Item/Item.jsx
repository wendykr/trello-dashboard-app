import React, {useState} from 'react';
import { Label } from '../Label/Label';
// import { Tag } from '../Tag/Tag';
import { PopupList } from '../PopupList/PopupList';
import { LinkEdit } from '../LinkEdit/LinkEdit';

export const Item = ({ text, labels, src, isClickLabel, onClickLabel }) => {

  const [isShowEditLink, setIsShowEditLink]= useState(false);

  const onMouseEnter = () => {
    setIsShowEditLink(true);
  };

  const onMouseLeave = () => {
    setIsShowEditLink(false);
  };

  return (
    <li 
      className="relative z-20 mx-1 my-2 bg-white text-[#1d284c] leading-snug cursor-pointer hover:outline hover:outline-2 hover:outline-[#5881fd] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
                  isClickedLabel={isClickLabel}
                  onClickLabel={onClickLabel}
                />
              ))}
            </aside>
          )
        }
        <p className="outline-none text-[#172b4d]">
          { text }
        </p>
        {/* <aside className="mb-0.5 mt-1.5 flex gap-1.5">
          <Tag category="design" />
          <Tag category="code" />
        </aside> */}
      </div>
      <PopupList />
      {isShowEditLink && <LinkEdit />}
    </li>
  )
}