import React from "react";
import ExpensItem from "./ExpensItem";
import "./Expense.css";
import Card from "../UI/Card";

export default function Expense(props) {

  return (
    <div>
      <Card className="expenses">
        <ExpensItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpensItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpensItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        <ExpensItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        />
      </Card>
    </div>
  );
}
