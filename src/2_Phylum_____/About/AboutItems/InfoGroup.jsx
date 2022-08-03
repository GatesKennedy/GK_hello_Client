import React, {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';
//  COMPS
import SummaryItem from './SummaryItem';
import MediaCont from './MediaDisplay/MediaCont';
import ToggleItem from './ToggleItem';
//  STYLE
import { InfoCont, InfoText, BodyCont, StoryCont, TitleItem } from './styled';

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
  const [toggleHeight, setToggleHeight] = useState(38);
  const [mediaHeight, setMediaHeight] = useState(null);

  const [topOffset, setTopOffset] = useState(0);

  //  Calc Height
  useLayoutEffect(() => {
    let storyHeight = 0;
    if (story.length !== 0)
      storyHeight = document.getElementById(`InfoGroup-Expanded${id}`)
        .offsetHeight;
    isMore
      ? setClosedHeight(summaryHeight + toggleHeight)
      : setClosedHeight(summaryHeight);
    setExpandedHeight(storyHeight);
    isOpen
      ? setShownHeight(closedHeight + storyHeight)
      : setShownHeight(closedHeight);
  }, [
    id,
    topId,
    isOpen,
    isMore,
    story,
    closedHeight,
    summaryHeight,
    toggleHeight,
  ]);

  //  setIsOpen()
  useEffect(() => {
    parentId === id ? setIsOpen(true) : setIsOpen(false);
  }, [id, topId, parentId]);

  // //  calc
  // useEffect(() => {
  //   calcHeight();
  // }, [calcHeight, isOpen, summaryHeight]);

  //  Record height of children
  const reportChild = useCallback(() => {
    // const reportChildHeight = (localId, localHeight) => {
    //   (topId === 1) &&
    //     console.log('%creportChild() > ', 'color: #9d58da');
    //   (topId === 1) && console.log(`   ${localId}`);
    //   //==========================================================
    //   let childUpdate = [];
    //   let isDiff = false;
    //   if (childList == null) return;
    //   (topId === 1) &&
    //     console.log(`   ${localId} childList: `, childList);
    //   //  child has reported
    //   if (childList.some((item) => item.id === localId)) {
    //     (topId === 1) && console.log(`   updating...`);
    //     childUpdate = childList.map((item) => {
    //       if (item.id === localId && item.height !== localHeight) {
    //         isDiff = true;
    //         return { ...item, height: localHeight };
    //       } else return item;
    //     });
    //   } else {
    //     //  child unreported
    //     (topId === 1) && console.log(`   adding...`);
    //     childUpdate = [...childList, { id: localId, height: localHeight }];
    //     isDiff = true;
    //   }
    //   //  filter updateList
    //   const updateList = childUpdate.filter((item) => item.id !== 0);
    //   //  reduce childList heights
    //   const childHeightSum = updateList.reduce(
    //     (cnt, item) => cnt + item.height,
    //     0
    //   );
    //   childUpdate = childUpdate.map((item) =>
    //     item.id === 0 ? { ...item, height: childHeightSum } : item
    //   );
    //   console.log('   isDiff? ', isDiff);
    //   // isDiff && updateChildList(childUpdate);
    //   //==========================================================
    //   (topId === 1) &&
    //     console.log(
    //       `   childUpdate[] =
    //         `,
    //       childUpdate
    //     );
    // };
    // reportChildHeight(id, shownHeight);
  }, [topId, id, childList, shownHeight]);

  //  LOG STATE
  useEffect(() => {
    //   topId === 1 &&
    //     console.log(`   ${id}: caclHeight()
    //   isOpen:         ${isOpen}
    //   summaryHeight:  ${summaryHeight}
    //   toggleHeight:   ${toggleHeight}
    //   closedHeight    ${closedHeight}
    //   expandedHeight  ${expandedHeight}
    //                   --------
    //   shownHeight     ${shownHeight}
    // `);
  }, [
    id,
    topId,
    closedHeight,
    shownHeight,
    summaryHeight,
    expandedHeight,
    toggleHeight,
    isOpen,
  ]);

  //  Tell Parent Chosen Child
  const handleToggle = (localId) => {
    //==========================================================
    if (localId === id) {
      toggleParent(localId);
      return;
    } else {
      localId === openChild ? setOpenChildId(0) : setOpenChildId(localId);
    }
  };

  return (
    <InfoCont id={`InfoGroup-InfoCont${id}`}>
        <InfoText
          id={`InfoGroup-InfoText${id}`}
          style={{
            height: shownHeight,
            width: media.length > 0 ? '30%' : '100%',
          }}
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
              setParentHeight={setToggleHeight}
              type={'sub'} // 'main' or 'sub'
              handleToggle={handleToggle}
            />
          )}
          {isMore && (
            <div id={`InfoGroup-Expanded${id}`}>
              {story.map((child) => (
                <StoryCont key={child.id} id={`InfoGroup-StoryCont${child.id}`}>
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
                </StoryCont>
              ))}
            </div>
          )}
        </InfoText>
        {media.length > 0 && (
          <MediaCont id='InfoGroup-MediaCont' _media={media} />
        )}
    </InfoCont>
  );
};

InfoGroup.propTypes = {};

export default InfoGroup;
