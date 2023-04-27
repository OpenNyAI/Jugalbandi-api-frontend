import React from 'react';
import { Tabs } from 'antd';

const ContentFormtting = ({ contentList, highlightedPortions }) => {
  const highlightedArray = [];
  highlightedPortions.forEach((highlightedPortion) => {
    const highlights = highlightedPortion.split('   ');
    highlights.forEach((highlight) => highlightedArray.push(highlight.replaceAll(' ', ' ')));
  });
  highlightedArray.sort();
  const segments = contentList?.split('   ');

  const highlightedSegments = segments.map((segment) => {
    const highlighted = highlightedArray.find((highlight) => segment.includes(highlight));
    const positions = [];
    highlightedArray.forEach((highlight) => {
      if (segment.includes(highlight)) {
        const startingIndex = segment.indexOf(highlight);
        const obj = {
          start: startingIndex,
          end: startingIndex + highlight.length,
        };
        positions.push(obj);
      }
    });
    return highlighted ? (
      <div>
        <span>{segment.substring(0, positions[0].start)}</span>
        {positions.map((pos) => <span style={{ backgroundColor: 'yellow' }}>{segment.substring(pos.start, pos.end)}</span>)}

        <span>{segment.substring(positions[positions.length - 1].end, segment.length - 1)}</span>
      </div>
    ) : (
      <div>{segment}</div>
    );
  });
  return (
    <div>
      {highlightedSegments}

    </div>
  );
};
const CardPdfList = ({ cardPdfList, pdfContent }) => (
  <div style={{
    minHeight: '700px', maxHeight: '700px', overflowY: 'scroll', backgroundColor: 'rgba(209, 209, 251, 0.42)', padding: '5% 5% 2% 5%', borderRadius: '2%',
  }}
  >
    {cardPdfList.length > 0 && (
      <Tabs
        style={{
          backgroundColor: 'white', borderRadius: '10px', padding: '2%',
        }}
        type="card"
        items={cardPdfList.map((_, i) => {
          const id = String(i + 1);
          return {
            label: _.source_text_name,
            key: id,
            children: <ContentFormtting
              contentList={pdfContent[_.source_text_name]}
              highlightedPortions={_.chunks}
            />,
          };
        })}
      />
    )}
  </div>
);

export default CardPdfList;
