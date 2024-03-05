import React, { createContext, useContext, useState } from 'react';

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {

  const [isShowDetailItem, setIsShowDetailItem] = useState(false);

  const [detailCard, setDetailCard] = useState({
    id: '',
    headline: '',
    title: '',
    src: '',
    description: '',
    dateStart: '',
    dateEndd: '',
  });

  const onClickDetail = (id, title, headline, src, description, dateStart, dateEnd) => {
    setDetailCard({
      id,
      headline,
      title,
      src,
      description,
      dateStart,
      dateEnd,
    });
    setIsShowDetailItem(true);
  }

  return (
    <DetailContext.Provider value={{
      isShowDetailItem, setIsShowDetailItem,
      detailCard, setDetailCard,
      onClickDetail
    }}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetail = () => useContext(DetailContext);