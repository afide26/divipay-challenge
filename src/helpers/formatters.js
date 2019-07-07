import React from "react";
export const currencyFormatter = number => {
  return `$ ${number.toFixed(2)}`;
};

export const dateFormatter = date => {
  let parsedDate = new Date(date);
  let month =
    parsedDate.getMonth() < 10
      ? `0${parsedDate.getMonth() + 1}`
      : parsedDate.getMonth();
  let day =
    parsedDate.getDate() < 10
      ? `0${parsedDate.getDate()}`
      : parsedDate.getDate();
  return `${day}.${month}.${parsedDate.getFullYear()}`;
};

export const iconStatusFormatter = status => {
  if (status === "exported") {
    return <i className="fas fa-arrow-circle-right"> </i>;
  } else if (status === "complete") {
    return <i className="fas fa-check-circle"> </i>;
  } else {
    return <i className="fas fa-exclamation-circle"> </i>;
  }
};

export const merchantFormatter = merchant => {
  return <span className="merchant"> {merchant.charAt(0)} </span>;
};

export const teamMemberFormatter = teammember => {
  let teamSplit = teammember.split(" ");

  if (teamSplit.length === 3 && teamSplit.includes("PhD")) {
    return (
      <span className="teammember">
        {teamSplit[0].charAt(0) + teamSplit[1].charAt(0)}
      </span>
    );
  } else if (teamSplit.length === 3) {
    return (
      <span className="teammember">
        {teamSplit[1].charAt(0) + teamSplit[2].charAt(0)}
      </span>
    );
  } else {
    return (
      <span className="teammember">
        {teamSplit[0].charAt(0) + teamSplit[1].charAt(0)}
      </span>
    );
  }
};

export const centredTD = () => {
  return {
    display: "inlineFlex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  };
};
