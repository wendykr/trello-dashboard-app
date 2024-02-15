import React, { createContext, useContext, useState } from 'react';

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {

  const [isShowDetailItem, setIsShowDetailItem] = useState(false);
  const [detailId, setDetailId] = useState('');
  const [detailHeadline, setDetailHeadline] = useState('');
  const [detailTitle, setDetailTitle] = useState('');
  const [detailSrc, setDetailSrc] = useState('');
  const [detailDescription, setDetailDescription] = useState('');

  const onClickDetail = (id, title, headline, src, description) => {
    setDetailId(id);
    setDetailTitle(title);
    setDetailHeadline(headline);
    setDetailSrc(src);
    setDetailDescription(description);
    setIsShowDetailItem(true);
  }

  return (
    <DetailContext.Provider value={{
      isShowDetailItem, setIsShowDetailItem,
      detailId, setDetailId,
      detailHeadline, setDetailHeadline,
      detailTitle, setDetailTitle,
      detailSrc, setDetailSrc,
      detailDescription, setDetailDescription,
      onClickDetail
    }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail= () => useContext(DetailContext);