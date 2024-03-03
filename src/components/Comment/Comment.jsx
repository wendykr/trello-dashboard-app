import React from 'react';

export const Comment = ({ comment, id, deleteComment }) => {

  const handleClickDelete = () => {
    // console.log('delete', id);
    deleteComment(id);
  }
  return (
    <div>
      <p className="mt-4 py-3 px-2 bg-white text-[#1d284c] rounded-lg shadow-[0_1px_0px_rgba(9,30,66,0.3)]">{comment}</p>
      <div className="pl-2 mt-1 text-[12px] flex gap-1">
        <a className="underline" href="#">Upravit</a> • 
        <a className="underline" href="#" onClick={handleClickDelete}>Smazat</a>
      </div>
    </div>
  )
}