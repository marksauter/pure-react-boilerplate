import React from 'react';
import reactStamp from 'react-stamp';

const Hello = reactStamp(React).compose(
  { render() {
      const { subject, actions } = this.props;
      const handleSubmit =
        (e) => {
          const text = e.target.value.trim();
          if (e.which === 13 && text.length !== 0) {
            actions.setSubject(text);
          }
        };
      const handleChange =
        (e) => {
          actions.setSubject(e.target.value);
        };

      return (
        <div>
          <p>Hello, {subject}!</p>
          <input
            type="text"
            autoFocus="true"
            onKeyDown={handleSubmit}
            onChange={handleChange}
          />
        </div>
      );
    }
  }
);

export default Hello;
