import React from 'react';

export const Comment = ({ id, comment, editComment, deleteComment }) => {

  const handleClickEdit = () => {
    editComment(id);
  }

  const handleClickDelete = () => {
    deleteComment(id);
  }
  return (
    <>
      <p className="py-3 px-2 bg-white text-[#1d284c] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)]">{comment}</p>
      <div className="pl-2 mt-1 text-[12px] flex gap-1">
        <button className="underline" onClick={handleClickEdit}>Upravit</button> • 
        <button className="underline" onClick={handleClickDelete}>Smazat</button>
      </div>
    </>
  )
}