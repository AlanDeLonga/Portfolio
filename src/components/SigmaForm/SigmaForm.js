import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, Col } from 'pui-react-grids';
import s from './SigmaForm.css';

class SigmaForm extends React.Component {
  static propTypes = {
    // savedRows
  };

  setUpRow = (index) => (
    <Row>
      <Col key={index} md={6} className={s.quizCheckBoxContainer}>Checkbox</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>Email</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>First Name</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>Last Name</Col>
      <Col key={index} md={6} className={s.quizDropDownContainer}>Merit</Col>
      <Col key={index} md={6} className={s.quizUploadContainer}>Add</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>Issue Date</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>Expiration Date</Col>
      <Col key={index} md={6} className={s.quizInputContainer}>Identification Code</Col>
    </Row>
  );

  displayRows = () => {

    return '';
  };


  render() {
    return (
      <div className={s.root}>
        { displayRows }
        <div>Add</div>
      </div>
    );
  }
}

export default withStyles(s)(SigmaForm);
