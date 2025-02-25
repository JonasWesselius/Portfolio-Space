import './LearningPage.css';
import PropTypes from 'prop-types';

function LearningPage({ visible }) {
  return (
    <div className="learning-page" style={{ display: visible ? 'block' : 'none' }}>
      {/* Content will go here */}
    </div>
  );
}

LearningPage.propTypes = {
  visible: PropTypes.bool
};

export default LearningPage;