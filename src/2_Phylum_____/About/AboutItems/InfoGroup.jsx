import React, { Fragment, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import { InfoCont, TextCont, BodyCont, TitleItem } from './styled';

const InfoGroup = ({
  topId,
  parentId,
  toggleParent,
  childList,
  updateChildList,
  item: { id, summary, story, media, links },
}) => {
  //  STATE
  const isMore = story.length > 0;
  const [isOpen, setIsOpen] = useState(false);
  const [openChild, setOpenChildId] = useState(0);
  const [shownHeight, setShownHeight] = useState(null);
  const [closedHeight, setClosedHeight] = useState(null);
  const [expandedHeight, setExpandedHeight] = useState(null);
  const [summaryHeight, setSummaryHeight] = useState(null);
  const [mediaHeight, setMediaHeight] = useState(null);
  const toggleHeight = 38;

  const [topOffset, setTopOffset] = useState(0);

  //  CALLBACK
  const calcHeight = useCallback(() => {
    const storyHeight = document.getElementById(`InfoGroup-Expanded${id}`)
      .offsetHeight;
    setClosedHeight(summaryHeight + toggleHeight);

    isOpen
      ? setShownHeight(closedHeight + storyHeight)
      : setShownHeight(closedHeight);
    //==========================================================
    (topId === 2 || topId === 1) &&
      console.log('%c calcHeight() > ', 'color: #9bdbd8');
    // (topId === 2 || topId === 1) &&
    //   console.log(`   ${id}: caclHeight()
    //       isOpen:         ${isOpen}
    //       closedHeight    ${closedHeight}
    //       expandedHeight  ${expandedHeight}
    //                       --------
    //       shownHeight     ${shownHeight}
    //     `);
  }, [id, topId, isOpen, closedHeight, summaryHeight, toggleHeight]);

  //  Record height of children
  const reportChild = useCallback(() => {
    const reportChildHeight = (localId, localHeight) => {
      (topId === 2 || topId === 1) &&
        console.log('%creportChild() > ', 'color: #9d58da');
      (topId === 2 || topId === 1) && console.log(`   ${localId}`);
      //==========================================================
      let childUpdate = [];
      let isDiff = false;

      if (childList == null) return;
      (topId === 2 || topId === 1) &&
        console.log(`   ${localId} childList: `, childList);
      //  child has reported
      if (childList.some((item) => item.id === localId)) {
        (topId === 2 || topId === 1) && console.log(`   updating...`);

        childUpdate = childList.map((item) => {
          if (item.id === localId && item.height !== localHeight) {
            isDiff = true;
            return { ...item, height: localHeight };
          } else return item;
        });
      } else {
        //  child unreported
        (topId === 2 || topId === 1) && console.log(`   adding...`);
        childUpdate = [...childList, { id: localId, height: localHeight }];
        isDiff = true;
      }

      //  filter updateList
      const updateList = childUpdate.filter((item) => item.id !== 0);
      //  reduce childList heights
      const childHeightSum = updateList.reduce(
        (cnt, item) => cnt + item.height,
        0
      );

      childUpdate = childUpdate.map((item) =>
        item.id === 0 ? { ...item, height: childHeightSum } : item
      );
      console.log('   isDiff? ', isDiff);
      // isDiff && updateChildList(childUpdate);
      //==========================================================
      (topId === 2 || topId === 1) &&
        console.log(
          `   childUpdate[] =
            `,
          childUpdate
        );
    };
    reportChildHeight(id, shownHeight);
  }, [topId, id, childList, shownHeight]);
  //  setIsOpen()
  useEffect(() => {
    parentId === id ? setIsOpen(true) : setIsOpen(false);
  }, [id, topId, parentId]);

  //  calc
  useEffect(() => {
    calcHeight();
  }, [calcHeight, isOpen]);
  //  report
  useEffect(() => {
    shownHeight && reportChild();
  }, [reportChild, shownHeight, isOpen]);

  //  Tell Parent Chosen Child
  const handleToggle = (localId) => {
    //==========================================================
    console.log('%chandleToggle() > ', 'color: #c58cda');
    console.log(`   ${id}: handleToggle() 
    localId:      ${localId}
    item.id:      ${id}
    topId:        ${topId}
    openChild:    ${openChild}
    isOpen:       ${isOpen}
    shownHeight:  ${shownHeight}
    `);

    //==========================================================
    if (localId === id) {
      toggleParent(localId);
      return;
    } else {
      console.log('%csetOpenChildId()', 'color: #c58cda');
      localId === openChild ? setOpenChildId(0) : setOpenChildId(localId);
    }
  };

  return (
    <InfoCont id={`InfoGroup-InfoCont${id}`}>
      <BodyCont id={`InfoGroup-BodyCont${id}`}>
        <TextCont
          id={`InfoGroup-TextCont${id}`}
          style={{ height: shownHeight }}
        >
          <SummaryItem
            topId={topId}
            isMore={isMore}
            id={id}
            summary={summary}
            setParentHeight={setSummaryHeight}
            handleToggle={handleToggle}
          />
          {isMore && (
            <ToggleItem
              isOpen={isOpen}
              isMore={isMore}
              id={id}
              type={'sub'} // 'main' or 'sub'
              handleToggle={handleToggle}
            />
          )}
          <div id={`InfoGroup-Expanded${id}`}>
            {story.map((child) => (
              <Fragment>
                <TitleItem id={`InfoGroup-TitleItem${child.id}`}>
                  {child.title}
                </TitleItem>
                <InfoGroup
                  topId={topId}
                  parentId={openChild}
                  reportChild={reportChild}
                  childList={childList}
                  toggleParent={handleToggle}
                  item={child}
                />
              </Fragment>
            ))}
          </div>
        </TextCont>
        {media.length > 0 && (
          <MediaCont id='InfoGroup-MediaCont' _media={media} />
        )}
      </BodyCont>
    </InfoCont>
  );
};

InfoGroup.propTypes = {
  updateChildList: PropTypes.func.isRequired,
};

export default InfoGroup;
