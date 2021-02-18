import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : 'top');

  return (
    <React.Fragment>
      <Loader show={isLoading}>Loading...</Loader>
      <React.Fragment>
        {stories.map(
          ({ data: story }) => story && <Story key={story.id} story={story} />
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ShowStories;
