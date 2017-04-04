import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SigmaForm.css';

class SigmaForm extends React.Component {

  constructor(props) {
    super(props);
    this.checkChange = this.checkChange.bind(this);
    this.saveRow = this.saveRow.bind(this);
    this.state = {
      allChecked: false,
      selected: [],
      rows: [{}],
    };
  }

  componentDidMount() {
    const rows = JSON.parse(sessionStorage.getItem('rows')) || [{}];
    const selected = [];
    // const savedData = JSON.parse(sessionStorage.getItem('rows'));
    // const rows = savedData ? savedData : [{}];
    rows.map(function (val, index) {
      selected[index] = false;
    });
    this.setState({ rows, selected, allChecked: false });
  }

  setUpRow = (content, index) => {
    const checkName = 'rowChecked'; // `rowChecked_${index}`;
    const meritName = 'merit'; // `merit_${index}`;
    const fileName = 'file'; // `file_${index}`;

    return (
      <tr key={index} className={s.entryRow}>
        <td className={s.quizCheckBoxContainer}>
          <input
            checked={this.state.selected[index]}
            onChange={() => this.checkChange(index)}
            type="checkbox"
            name={checkName}
            ref={checkName}
          />
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.email ? content.email : '', index, 'email') }
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.first_name ? content.first_name : '', index, 'first_name') }
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.last_name ? content.last_name : '', index, 'last_name') }
        </td>
        <td className={s.quizDropDownContainer} >{this.createDropDown(content, index, meritName)}</td>
        <td className={s.quizUploadContainer}>
          <label htmlFor={fileName} className={s.fileUploadLabel}>
            <input type="file" name={fileName} ref={fileName} required />
            <span><div className="glyphicon glyphicon-plus-sign" />add</span>
          </label>
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.issue_date ? content.issue_date : '', index, 'issue_date') }
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.expiration_date ? content.expiration_date : '', index, 'expiration_date') }
        </td>
        <td className={s.quizInputContainer}>
          { this.createInput(content.id_code ? content.id_code : '', index, 'id_code') }
        </td>
      </tr>
    );
  };

  checkAll = () => {
    const rowState = [];
    const checkedState = !this.state.allChecked;
    this.state.selected.forEach(function (val, index) {
      rowState[index] = checkedState;
    });
    this.setState({
      allChecked: !this.state.allChecked,
      selected: rowState,
    });
  };

  checkChange = (index) => {
    const newSelected = this.state.selected;
    newSelected[index] = !newSelected[index];
    this.setState({
      selected: newSelected,
      allChecked: false,
    });
  }

  addRow = () => {
    const newSelected = this.state.selected;
    const newRows = this.state.rows;
    newRows.push({});
    newSelected.push(false);
    this.setState({
      rows: newRows,
      selected: newSelected,
    }, function () {
      sessionStorage.setItem('rows', JSON.stringify(this.state.rows));
    });
  };

  saveRow = (evt, index) => {
    const updatedRows = this.state.rows;
    // if the row already has a value saved for that input overwrite it, else generate it
    updatedRows[index][evt.target.name] = evt.target.value;

    this.setState({
      rows: updatedRows,
    }, function () {
      sessionStorage.setItem('rows', JSON.stringify(this.state.rows));
    });
  };

  deleteRows = (send) => {
    const newRows = [];
    const newSelected = [];
    const that = this;
    this.state.rows.map(function (row, index) {
      if (!that.state.selected[index]) {
        newRows.push(row);
        newSelected.push(false);
      } else {
        if (send) {
          console.log(`Sent email to ${row.email}`);
        }
      }
    });
    this.setState({
      rows: newRows,
      selected: newSelected,
      allChecked: false,
    }, function () {
      sessionStorage.setItem('rows', JSON.stringify(this.state.rows));
    });
  }

  createDropDown = (content, index, name) => (
    <select value={content ? content.merit : ''} onChange={evt => this.saveRow(evt, index)} name={name} ref={name}>
      {this.props.merits.map(function (selection) {
        return <option key={selection} value={selection}>{selection}</option>;
      })}
    </select>
  );

  // it worked better using onBlur, but react console warning when not using onChange
  createInput = (value, index, name) => {
    // const inputName = `${name}`; // `${name}_${index}`;
    return (
      <input type="text" onChange={evt => this.saveRow(evt, index)} name={name} ref={name} value={value} />
    );
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.topBar}>
          <span>Outbox for Sigma Engineering</span>
          <div className={s.topButtons}>
            <button>UPLOAD SPREADSHEET</button>
            <button onClick={() => { this.deleteRows(false); }} >DELETE</button>
            <button onClick={() => { this.deleteRows(true); }}>SEND</button>
          </div>
        </div>
        <table className={s.outboxTable}>
          <tbody>
            <tr>
              <th className={s.quizCheckBoxContainer}>
                <input
                  checked={this.state.allChecked}
                  type="checkbox"
                  name="select_all"
                  onChange={this.checkAll}
                />
              </th>
              <th className={s.quizInputContainer}>EMAIL</th>
              <th className={s.quizInputContainer}>FIRST NAME</th>
              <th className={s.quizInputContainer}>LAST NAME</th>
              <th className={s.quizDropDownContainer}>MERIT</th>
              <th className={s.quizUploadContainer}>ADD</th>
              <th className={s.quizInputContainer}>ISSUE DATE</th>
              <th className={s.quizInputContainer}>EXPIRATION DATE</th>
              <th className={s.quizInputContainer}>IDENTIFICATION CODE</th>
            </tr>
            { this.state.rows.map(this.setUpRow) }
          </tbody>
        </table>
        <button onClick={this.addRow} className={s.addButton}>ADD</button>
      </div>
    );
  }
}

SigmaForm.propTypes = {
  merits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(s)(SigmaForm);
