import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';

import UpDown from './UpDown';
import { makeComment } from '../../selectors';
import { upClickComment, downClickComment } from '../../actions';
import { commentType } from '../../reducers/comments';

const makeMapStateToProps = () => {
  const getComment = makeComment();

  const mapStateToProps = (state, props) => ({
    comment: getComment(state, props),
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  upClick: () => { dispatch(upClickComment(ownProps.id)); },
  downClick: () => { dispatch(downClickComment(ownProps.id)); },
});

function Comment({ comment, upClick, downClick }) {
  return (
    <div className="info-item">
      <InputGroup>
        <InputGroup.Addon>
          <UpDown
            type={comment.type}
            upClick={upClick}
            downClick={downClick}
          />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </div>

  );
}
Comment.defaultProps = {
  comment: { type: commentType.NEUTRAL },
};
Comment.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  comment: PropTypes.shape({ type: PropTypes.number.isRequired }),
  downClick: PropTypes.func.isRequired,
  upClick: PropTypes.func.isRequired,
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Comment);
