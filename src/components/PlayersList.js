import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class PlayersList extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, dark, light } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="players-list"
              style={{ background: theme.bg, color: theme.text }}
            >
              <ul>
                <li style={{ background: theme.ui }}>Christiano Ronaldo</li>
                <li style={{ background: theme.ui }}>Paulo Maldini</li>
                <li style={{ background: theme.ui }}>Andrea Pirlo</li>
                <li style={{ background: theme.ui }}>Cludio Marchisio</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default PlayersList;
