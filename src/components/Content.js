/* eslint-disable no-debugger */
import React from 'react';

const Content = ({ contentList, highlightedPortions }) => {
  const highlightedArray = [];
  const sortedArr = highlightedPortions.sort(
    (a, b) => contentList.indexOf(a) - contentList.indexOf(b),
  );
  const startingRange = contentList.indexOf(sortedArr[0]);
  const endingRange = contentList.indexOf(sortedArr[sortedArr.length - 1])
  + sortedArr[sortedArr.length - 1].length;
  // console.log('segments', contentList.substring(startingRange, endingRange));
  sortedArr.forEach((highlightedPortion) => {
    const highlights = highlightedPortion.split('\n').filter((str) => str !== ' ');
    highlights.forEach((highlight) => highlightedArray.push(highlight.trim()));
  });
  const segments = contentList?.split('\n').filter((str) => str !== ' ');
  const trimmedSegments = [];
  segments.forEach((segment) => {
    trimmedSegments.push(segment.trim());
  });
  // console.log('highlights 5', startingRange, endingRange);
  // console.log(segments);
  console.log('trims', trimmedSegments);
  const highlightedSegments = trimmedSegments.map((segment) => {
    // const highlighted = highlightedArray.find((highlight) => segment.includes(highlight));
    let highlighted;
    let intermediate = true;
    let startingHighlightRange = false;
    const positions = [];
    // console.log('index 1', segment);
    highlightedArray.forEach((highlight) => {
      // console.log('index 2', highlight);
      // console.log('index 3', contentList.indexOf(segment), ' ', segment.includes(highlight));
      if ((contentList.indexOf(segment) >= startingRange
      && contentList.indexOf(segment) <= endingRange)) {
        if (segment.includes(highlight)) {
          highlighted = segment.includes(highlight);
          const startingIndex = segment.indexOf(highlight);
          const obj = {
            start: startingIndex,
            end: startingIndex + highlight.length,
            highlight,
            segment,
            length: segment.length,
            posStart: contentList.indexOf(segment),
            startingRange,
            endingRange,
          };
          positions.push(obj);
        }
      } else if (segment === highlight) {
        highlighted = segment.includes(highlight);
        const startingIndex = segment.indexOf(highlight);
        const obj = {
          start: startingIndex,
          end: startingIndex + highlight.length,
          highlighted,
          highlight,
          segment,
          length: segment.length,
          posStart: contentList.indexOf(segment),
          startingRange,
          endingRange,
        };
        positions.push(obj);
      }
    });
    for (let i = 0; i < positions.length; i += 1) {
      if (positions[i].end === segment.length) {
        intermediate = false;
        break;
      }
    }
    for (let i = 0; i < positions.length; i += 1) {
      if (positions[i].start === 0) {
        startingHighlightRange = true;
        break;
      }
    }
    for (let i = 0; i < positions.length; i += 1) {
      if (positions[i].start === 0) {
        startingHighlightRange = true;
        break;
      }
    }
    if (positions.length > 0) {
      console.log('highlights 45', positions);
    }
    return highlighted ? (
      <div>
        {!startingHighlightRange ? <span>{segment.substring(0, positions[0].start)}</span> : <span style={{ backgroundColor: 'yellow' }}>{segment.substring(0, positions[0].start)}</span>}

        {positions.map((pos, index) => (
          <>
            {(positions[index - 1] && pos.start - positions[index - 1].end < 1)
              ? (
                <span>
                  {pos.end > positions[index - 1].end
                    ? <span style={{ backgroundColor: 'yellow' }}>{(segment.substring(pos.start, pos.end)).replace(segment.substring(pos.start, positions[index - 1].end), '')}</span>
                    : null}
                </span>
              )
              : <span style={{ backgroundColor: 'yellow' }}>{segment.substring(pos.start, pos.end)}</span>}
            {(positions[index + 1] && positions[index + 1].start - pos.end !== 1)
                && (positions[index + 1] && positions[index + 1].start - pos.end > 1)
              ? <span>{positions[index + 1].highlighted ? <span>{segment.substring(pos.end, positions[index + 1].start)}</span> : <span style={{ backgroundColor: 'yellow' }}>{segment.substring(pos.end, positions[index + 1].start)}</span>}</span> : null}
          </>
        ))}
        {segment.length - 1 - positions[positions.length - 1].end > 1 && intermediate
          && (
          <span>
            {segment.substring(positions[positions.length - 1].end, segment.length - 1)}
          </span>
          )}

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

export default Content;
