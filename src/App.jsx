import { loremIpsum } from "lorem-ipsum";
import ListItem from "./components/ListItem";
import { AutoSizer, List } from "react-virtualized";

import "./App.css";

const totalItem = 5000;

// const listHeight = 500;
const rowHeight = 50;
// const rowWidth = 700;

const App = () => {
  const list = Array(totalItem)
    .fill()
    .map((_item, index) => ({
      id: index,
      name: "Golam Rabbani",
      image: "https://placehold.co/40",
      text: loremIpsum({
        count: 1,
        format: "plain",
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8,
      }),
    }));

  const listRender = ({ index, key, style }) => {
    return (
      <ListItem
        key={key}
        name={list[index].name}
        text={list[index].text}
        image={list[index].image}
        style={style}
      />
    );
  };

  return (
    <div className="App">
      <div className="list">
        <AutoSizer>
          {({ width, height }) => (
            <List
              height={height}
              width={width}
              rowHeight={rowHeight}
              rowCount={totalItem}
              rowRenderer={listRender}
              overscanColumnCount={5}
            />
          )}
        </AutoSizer>

        {/* {list.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            text={item.text}
            image={item.image}
          />
        ))} */}
      </div>
    </div>
  );
};

export default App;
