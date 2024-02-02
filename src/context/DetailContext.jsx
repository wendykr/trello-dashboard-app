import React, { createContext, useContext, useState } from 'react';

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {

  const [isShowDetailItem, setIsShowDetailItem] = useState(false);
  const [detailHeadline, setDetailHeadline] = useState('');
  const [detailTitle, setDetailTitle] = useState('');
  const [detailSrc, setDetailSrc] = useState('');
  const [detailDescription, setDetailDescription] = useState('');

  const onClickDetail = (title, headline, src, description) => {
    setDetailTitle(title);
    setDetailHeadline(headline);
    setDetailSrc(src);
    setDetailDescription(description);
    setIsShowDetailItem(true);
  }

  return (
    <DetailContext.Provider value={{
      isShowDetailItem, setIsShowDetailItem,
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