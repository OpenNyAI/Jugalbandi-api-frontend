/* eslint-disable no-unused-vars */
import React from 'react';
import { Tabs } from 'antd';
import CardPdf from './CardPdf';

const ContentFormtting = ({ contentList, highlightedPortions }) => {
  console.log(contentList.split('   '));
  const highlightedArray = [];
  highlightedPortions.forEach((highlightedPortion) => {
    const highlights = highlightedPortion.split('   ');
    highlights.forEach((highlight) => highlightedArray.push(highlight.replaceAll(' ', ' ')));
  });
  highlightedArray.sort();
  console.log(highlightedArray);
  const segments = contentList.split('   ');

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

  // return (
  //   <div>
  //     {contentList.split('   ').map((segment) => {
  //       if (segment.includes(highlightedArray[0])) {
  //         console.log('segment', segment);
  //         return <div style={{ backgroundColor: 'yellow' }}>{segment}</div>;
  //       }
  //       return <div>{segment}</div>;
  //     })}
  //     {/* {contentList.split('   ').map((pdf) => {
  //       if (pdf.includes(highlightedArray[0])) return <div>{`${pdf}`}</div>;
  //     })} */}

  //   </div>
  // );
  return (
    <div>
      {highlightedSegments}
      {/* {contentList.split('   ').map((segment, index) => {
        const highlight = highlightedArray[index];
        if (segment.includes(highlightedArray[0])) {
          console.log('segment', segment);
          return <div style={{ backgroundColor: 'yellow' }}>{segment}</div>;
        }
        return <div>{segment}</div>;
      })} */}
      {/* {contentList.split('   ').map((pdf) => {
        if (pdf.includes(highlightedArray[0])) return <div>{`${pdf}`}</div>;
      })} */}

    </div>
  );
};
const CardPdfList = ({ cardPdfList, pdfContent }) => (
  <div style={{
    minHeight: '700px', maxHeight: '700px', overflowY: 'scroll', backgroundColor: 'rgba(209, 209, 251, 0.42)', padding: '5% 5% 5% 5%', borderRadius: '2%',
  }}
  >
    <Tabs
      style={{
        backgroundColor: 'white', borderRadius: '10px', padding: '2%',
      }}
      type="card"
      items={cardPdfList.map((_, i) => {
        const id = String(i + 1);
        const contentList = pdfContent[_.source_text_name];
        return {
          label: _.source_text_name,
          key: id,
          // children: `${pdfContent[_.source_text_name]}`,
          children: <ContentFormtting
            contentList={pdfContent[_.source_text_name]}
            highlightedPortions={_.chunks}
          />,
        };
      })}
    />
    {/* {cardPdfList !== null && cardPdfList.map(
      (cardPdfSourceText) => (
        <CardPdf
          content={cardPdfSourceText?.substring(0, 506)}
          pdfContent={pdfContent}
        />
      ),
    ) } */}
  </div>
);

export default CardPdfList;
