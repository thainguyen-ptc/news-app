import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';

import MainHeaderComponent from 'components/MainHeader/MainHeader';
import { getNewsSourcesData } from 'store/selectors/pages/newsSourcesSelector';

function MainHeader ({ newsSources }) {
  const router = useRouter();
  const onSourcesSelection = debounce(handleSourceSelection, 200);
  const [ selectedSourceIdsMap, updateSelectedSourceIdsMap ] = useState({});

  useEffect(function () {
    const sourcesToString = router.query.sources;

    if (sourcesToString) {
      const sources = sourcesToString.split(',');
      const initSourcesMap = sources.reduce((acc, source) => {
        acc[source] = true;

        return acc;
      }, {});
      updateSelectedSourceIdsMap(initSourcesMap);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSourceSelection (sourceId) {
    let newSelectedSourceIdsMap = {...selectedSourceIdsMap};

    if (!newSelectedSourceIdsMap[sourceId]) {
      newSelectedSourceIdsMap[sourceId] = true;
    } else {
      delete newSelectedSourceIdsMap[sourceId];
    }

    const sourcesToString = Object.keys(newSelectedSourceIdsMap).reduce((acc, source) => {
      if (newSelectedSourceIdsMap[source]) {
        if (!acc) {
          acc = source;
        } else {
          acc = `${acc},${source}`;
        }
      }

      return acc;
    }, '');
    
    updateSelectedSourceIdsMap(newSelectedSourceIdsMap);
    router.push(`${router.pathname}?sources=${sourcesToString}`);
  } 

  return <MainHeaderComponent
    sources={newsSources}
    selectedSourceIdsMap={selectedSourceIdsMap}
    onSelectSource={onSourcesSelection} />;
}

function mapStateToProps (state) {
  const newsSources = getNewsSourcesData(state);

  return { newsSources };
}

export default connect(mapStateToProps)(MainHeader);
